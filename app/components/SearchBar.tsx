"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
    size?: "lg" | "sm";
    defaultAI?: boolean;
}

interface Suggestion {
    type: string;
    value: string;
    label: string;
    extra?: string;
}

const RECENT_SEARCHES_KEY = "jobnow_recent_searches";
const MAX_RECENT_SEARCHES = 5;

export default function SearchBar({ size = "lg", defaultAI = false }: SearchBarProps) {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [useAI, setUseAI] = useState(defaultAI);
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const router = useRouter();
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Load recent searches from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
            if (saved) {
                try {
                    setRecentSearches(JSON.parse(saved));
                } catch (e) {
                    console.error("Failed to parse recent searches:", e);
                }
            }
        }
    }, []);

    // Save recent search
    const saveRecentSearch = useCallback((searchTerm: string) => {
        if (!searchTerm.trim()) return;

        const updated = [
            searchTerm.trim(),
            ...recentSearches.filter(s => s.toLowerCase() !== searchTerm.toLowerCase())
        ].slice(0, MAX_RECENT_SEARCHES);

        setRecentSearches(updated);
        if (typeof window !== "undefined") {
            localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
        }
    }, [recentSearches]);

    // Handle click outside to close suggestions
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fetch suggestions with debounce
    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        if (keyword.length < 2) {
            setSuggestions([]);
            setLoadingSuggestions(false);
            return;
        }

        setLoadingSuggestions(true);
        setSelectedIndex(-1);

        debounceRef.current = setTimeout(async () => {
            try {
                const response = await fetch(`/api/ai/suggestions?q=${encodeURIComponent(keyword)}`);
                const data = await response.json();
                setSuggestions(data.suggestions || []);
            } catch (error) {
                console.error("Failed to fetch suggestions:", error);
                setSuggestions([]);
            } finally {
                setLoadingSuggestions(false);
            }
        }, 300);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [keyword]);

    // Highlight matching text in suggestion
    const highlightMatch = (text: string, query: string) => {
        if (!query.trim()) return text;

        try {
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(`(${escapedQuery})`, "gi");
            const parts = text.split(regex);

            return parts.map((part, i) =>
                regex.test(part) ? (
                    <span key={i} style={{ color: "var(--primary)", fontWeight: 600 }}>
                        {part}
                    </span>
                ) : part
            );
        } catch {
            return text;
        }
    };

    const handleSelectSuggestion = (suggestion: Suggestion) => {
        setKeyword(suggestion.value);
        setSuggestions([]);
        setShowSuggestions(false);
        saveRecentSearch(suggestion.value);
        handleSearchWithValue(suggestion.value);
    };

    const handleSelectRecentSearch = (searchTerm: string) => {
        setKeyword(searchTerm);
        setShowSuggestions(false);
        handleSearchWithValue(searchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allSuggestions = keyword.length >= 2 ? suggestions : recentSearches.map(rs => ({ type: "recent", value: rs, label: rs }));

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setShowSuggestions(true);
                setSelectedIndex(prev => prev < allSuggestions.length - 1 ? prev + 1 : 0);
                break;
            case "ArrowUp":
                e.preventDefault();
                setShowSuggestions(true);
                setSelectedIndex(prev => prev > 0 ? prev - 1 : allSuggestions.length - 1);
                break;
            case "Enter":
                e.preventDefault();
                if (selectedIndex >= 0 && allSuggestions[selectedIndex]) {
                    const item = allSuggestions[selectedIndex];
                    if (item.type === "recent") {
                        handleSelectRecentSearch(item.value);
                    } else {
                        handleSelectSuggestion(item as Suggestion);
                    }
                } else if (keyword.trim()) {
                    saveRecentSearch(keyword.trim());
                    handleSearchWithValue(keyword);
                }
                break;
            case "Escape":
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
            case "Tab":
                if (showSuggestions && selectedIndex >= 0 && allSuggestions[selectedIndex]) {
                    e.preventDefault();
                    setKeyword(allSuggestions[selectedIndex].value);
                }
                break;
        }
    };

    const handleSearchWithValue = async (searchKeyword: string) => {
        if (useAI && searchKeyword) {
            setIsLoading(true);
            try {
                const response = await fetch("/api/ai/search", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ query: searchKeyword, location: location, limit: 20 }),
                });

                const params = new URLSearchParams();
                params.set("q", searchKeyword);
                params.set("ai", useAI ? "true" : "false");
                if (location) params.set("loc", location);
                router.push(`/jobs?${params.toString()}`);
            } catch (error) {
                console.error("AI search failed:", error);
                const params = new URLSearchParams();
                params.set("q", searchKeyword);
                if (location) params.set("loc", location);
                router.push(`/jobs?${params.toString()}`);
            } finally {
                setIsLoading(false);
            }
        } else {
            const params = new URLSearchParams();
            if (searchKeyword) params.set("q", searchKeyword);
            if (location) params.set("loc", location);
            router.push(`/jobs?${params.toString()}`);
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (keyword.trim()) {
            saveRecentSearch(keyword.trim());
        }
        handleSearchWithValue(keyword);
    };

    const getSuggestionIcon = (type: string) => {
        switch (type) {
            case "keyword_suggestion":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
            case "related_keyword":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
            case "job_title":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 11h.01M12 11h.01M8 11h.01" /></svg>;
            case "company":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" /><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>;
            case "skill":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
            case "industry":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-4h6v4" /></svg>;
            case "recent":
                return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>;
            default:
                return null;
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "keyword_suggestion": return "Gợi ý";
            case "related_keyword": return "Liên quan";
            case "job_title": return "Công việc";
            case "company": return "Công ty";
            case "skill": return "Kỹ năng";
            case "industry": return "Ngành";
            case "recent": return "Tìm gần đây";
            default: return "";
        }
    };

    // Group suggestions by type for display
    const groupedSuggestions = keyword.length >= 2 ? {
        job_title: suggestions.filter(s => s.type === "job_title"),
        keyword_suggestion: suggestions.filter(s => s.type === "keyword_suggestion"),
        company: suggestions.filter(s => s.type === "company"),
        related_keyword: suggestions.filter(s => s.type === "related_keyword"),
        skill: suggestions.filter(s => s.type === "skill"),
        industry: suggestions.filter(s => s.type === "industry"),
    } : null;

    const recentSearchItems: Suggestion[] = recentSearches.map(rs => ({ type: "recent", value: rs, label: rs }));

    const hasSuggestions = keyword.length >= 2 && suggestions.length > 0;

    // Safe access to grouped suggestions
    const jobTitleSuggestions = groupedSuggestions?.job_title || [];
    const keywordSuggestions = groupedSuggestions?.keyword_suggestion || [];
    const companySuggestions = groupedSuggestions?.company || [];
    const relatedKeywords = groupedSuggestions?.related_keyword || [];
    const skillSuggestions = groupedSuggestions?.skill || [];
    const industrySuggestions = groupedSuggestions?.industry || [];

    return (
        <div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
            <form onSubmit={handleSearch} className="search-form">
                <div className="search-keyword">
                    <svg width="18" height="18" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginRight: "0.5rem" }}>
                        <circle cx="11" cy="11" r="8" />
                        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Tên công việc, kỹ năng, công ty..."
                        value={keyword}
                        onChange={(e) => { setKeyword(e.target.value); setShowSuggestions(true); }}
                        onFocus={() => setShowSuggestions(true)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                        autoComplete="off"
                    />
                </div>

                <div className="search-location">
                    <svg width="18" height="18" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginRight: "0.5rem" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Địa điểm..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <label className="search-ai-toggle" title="Tìm kiếm AI thông minh">
                    <input type="checkbox" checked={useAI} onChange={(e) => setUseAI(e.target.checked)} />
                    <div className="toggle-track">
                        <div className="toggle-thumb" />
                    </div>
                    <svg width="16" height="16" fill="none" stroke={useAI ? "var(--primary)" : "var(--text-muted)"} strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                    <span>AI</span>
                </label>

                <button type="submit" className="btn-primary search-submit" disabled={isLoading}>
                    {isLoading ? (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                        </svg>
                    )}
                    {isLoading ? "Đang tìm..." : "Tìm kiếm"}
                </button>
            </form>

            {/* Suggestions Dropdown */}
            {showSuggestions && (hasSuggestions || loadingSuggestions || recentSearches.length > 0) && (
                <div className="search-suggestions">
                    {loadingSuggestions ? (
                        <div className="suggestions-loading">
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ animation: "spin 1s linear infinite", display: "inline" }}>
                                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                            </svg>
                            <span>Đang gợi ý...</span>
                        </div>
                    ) : (
                        <>
                            {/* Recent searches when query is too short */}
                            {keyword.length < 2 && recentSearches.length > 0 && (
                                <>
                                    <div className="suggestions-header">
                                        <span>Tìm kiếm gần đây</span>
                                        <button onClick={() => { setRecentSearches([]); localStorage.removeItem(RECENT_SEARCHES_KEY); }}>Xóa</button>
                                    </div>
                                    {recentSearchItems.map((item, index) => (
                                        <button
                                            key={`recent-${index}`}
                                            onClick={() => handleSelectRecentSearch(item.value)}
                                            className="suggestion-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">{item.label}</span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Job Titles (vị trí công việc) */}
                            {keyword.length >= 2 && jobTitleSuggestions.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header job-header">
                                        <span>Vị trí công việc</span>
                                    </div>
                                    {jobTitleSuggestions.map((item, index) => (
                                        <button
                                            key={`job-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item job-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">
                                                {highlightMatch(item.label, keyword)}
                                                {item.extra && <span className="suggestion-extra"> · {item.extra}</span>}
                                            </span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Keyword Suggestions (từ khoá gợi ý) */}
                            {keyword.length >= 2 && keywordSuggestions.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header keyword-header">
                                        <span>Từ khoá gợi ý</span>
                                    </div>
                                    {keywordSuggestions.map((item, index) => (
                                        <button
                                            key={`keyword-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item keyword-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">{highlightMatch(item.label, keyword)}</span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Company (công ty) */}
                            {keyword.length >= 2 && companySuggestions.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header company-header">
                                        <span>Công ty</span>
                                    </div>
                                    {companySuggestions.map((item, index) => (
                                        <button
                                            key={`company-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item company-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">
                                                {highlightMatch(item.label, keyword)}
                                                {item.extra && <span className="suggestion-extra"> · {item.extra}</span>}
                                            </span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Related Keywords (từ khoá liên quan) */}
                            {keyword.length >= 2 && relatedKeywords.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header related-header">
                                        <span>Từ khoá liên quan</span>
                                    </div>
                                    {relatedKeywords.map((item, index) => (
                                        <button
                                            key={`related-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item related-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">{highlightMatch(item.label, keyword)}</span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Skills */}
                            {keyword.length >= 2 && skillSuggestions.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header skill-header">
                                        <span>Kỹ năng</span>
                                    </div>
                                    {skillSuggestions.map((item, index) => (
                                        <button
                                            key={`skill-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item skill-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">{highlightMatch(item.label, keyword)}</span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}

                            {/* Industries */}
                            {keyword.length >= 2 && industrySuggestions.length > 0 && (
                                <>
                                    <div className="suggestions-header category-header industry-header">
                                        <span>Ngành nghề</span>
                                    </div>
                                    {industrySuggestions.map((item, index) => (
                                        <button
                                            key={`industry-${index}`}
                                            onClick={() => handleSelectSuggestion(item)}
                                            className="suggestion-item industry-item"
                                        >
                                            <span className="suggestion-icon">{getSuggestionIcon(item.type)}</span>
                                            <span className="suggestion-text">{highlightMatch(item.label, keyword)}</span>
                                            <span className="suggestion-type">{getTypeLabel(item.type)}</span>
                                        </button>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
            )}

            <style jsx>{`
                .search-form {
                    display: flex;
                    background: var(--bg-card);
                    border-radius: 12px;
                    border: 2px solid var(--border);
                    box-shadow: var(--shadow-md);
                    overflow: hidden;
                    transition: border-color 200ms;
                }
                .search-form:focus-within {
                    border-color: var(--primary);
                }
                .search-keyword, .search-location {
                    display: flex;
                    align-items: center;
                    padding: 0 1.25rem;
                    flex: 1;
                    min-width: 0;
                }
                .search-keyword input, .search-location input {
                    border: none;
                    outline: none;
                    background: transparent;
                    font-family: inherit;
                    font-size: 0.9375rem;
                    color: var(--text);
                    width: 100%;
                    padding: 1rem 0;
                }
                .search-keyword {
                    flex: 2;
                }
                .search-keyword::after, .search-location::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 25%;
                    bottom: 25%;
                    width: 1.5px;
                    background: var(--border);
                }
                .search-location::after {
                    display: none;
                }
                .search-ai-toggle {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0 1rem;
                    cursor: pointer;
                    user-select: none;
                    border-left: 1px solid var(--border);
                }
                .search-ai-toggle input { display: none; }
                .toggle-track {
                    width: 36px;
                    height: 20px;
                    border-radius: 10px;
                    background: var(--border);
                    position: relative;
                    transition: background 200ms;
                }
                .search-ai-toggle input:checked + .toggle-track {
                    background: var(--primary);
                }
                .toggle-thumb {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    transition: left 200ms;
                }
                .search-ai-toggle input:checked + .toggle-track .toggle-thumb {
                    left: 18px;
                }
                .search-ai-toggle span {
                    font-size: 0.8125rem;
                    color: var(--text-muted);
                }
                .search-ai-toggle input:checked ~ span {
                    color: var(--primary);
                }
                .search-submit {
                    border-radius: 0 10px 10px 0 !important;
                    margin: 0 !important;
                }
                
                /* Suggestions dropdown */
                .search-suggestions {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    box-shadow: var(--shadow-lg);
                    margin-top: 4px;
                    z-index: 1000;
                    max-height: 350px;
                    overflow-y: auto;
                }
                .suggestions-loading {
                    padding: 1rem;
                    text-align: center;
                    color: var(--text-muted);
                }
                .suggestions-header {
                    padding: 0.5rem 1rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .suggestions-header button {
                    background: none;
                    border: none;
                    color: var(--primary);
                    cursor: pointer;
                    font-size: 0.75rem;
                    padding: 0;
                }
                .suggestion-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: none;
                    background: transparent;
                    text-align: left;
                    cursor: pointer;
                    color: var(--text);
                    font-size: 0.875rem;
                    border-bottom: 1px solid var(--border);
                }
                .suggestion-item:last-child { border-bottom: none; }
                .suggestion-item:hover, .suggestion-item.selected {
                    background: var(--bg);
                }
                
                /* Category headers */
                .category-header {
                    background: var(--bg);
                    font-weight: 600;
                    padding: 0.6rem 1rem;
                    border-bottom: 1px solid var(--border);
                }
                .job-header { border-left: 3px solid #2563eb; }
                .keyword-header { border-left: 3px solid #3b82f6; }
                .company-header { border-left: 3px solid #0891b2; }
                .related-header { border-left: 3px solid #8b5cf6; }
                .skill-header { border-left: 3px solid #10b981; }
                .industry-header { border-left: 3px solid #f59e0b; }
                .suggestion-extra {
                    color: var(--text-muted);
                    font-size: 0.8125rem;
                }
                .suggestion-icon { color: var(--text-muted); flex-shrink: 0; }
                .suggestion-text { flex: 1; }
                .suggestion-type { 
                    font-size: 0.75rem; 
                    color: var(--text-muted);
                    background: var(--tag-bg);
                    padding: 2px 8px;
                    border-radius: 4px;
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    .search-form {
                        flex-direction: column;
                        border-radius: 8px;
                        gap: 0;
                        overflow: visible;
                    }
                    .search-keyword, .search-location {
                        padding: 0.75rem;
                        flex: none;
                        width: 100%;
                    }
                    .search-keyword {
                        border-bottom: 1px solid var(--border);
                    }
                    .search-keyword::after { display: none; }
                    .search-ai-toggle {
                        padding: 0.75rem;
                        border-left: none;
                        border-top: 1px solid var(--border);
                        justify-content: center;
                    }
                    .search-submit {
                        border-radius: 8px !important;
                        margin: 0.5rem 0 0 0 !important;
                        width: 100%;
                        justify-content: center;
                    }
                    .search-keyword input, .search-location input {
                        padding: 0.5rem 0;
                    }
                }
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
