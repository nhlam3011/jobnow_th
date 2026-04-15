"use client";

import React, { useState, useMemo } from "react";

interface Story {
    id: string;
    imageUrl: string;
    title: string;
    user: string;
}

interface CompanyStoriesProps {
    companyName?: string;
}

// A pool of culture images to rotate/select from based on company
const IMAGE_POOL = [
    "/assets/culture/teamwork.png",
    "/assets/culture/teambuilding.png",
    "/assets/culture/office.png",
    "/assets/culture/meeting.png",
    "/assets/culture/celebration.png",
];

const CONTENT_TEMPLATES = [
    { title: "Môi trường năng động tại {name}", user: "Nhân viên phòng Dev" },
    { title: "Teambuilding và văn hóa tại {name}", user: "Đội ngũ HR" },
    { title: "Văn phòng hiện đại của {name}", user: "Team Branding" },
    { title: "Chia sẻ từ Product Manager tại {name}", user: "Quản lý sản phẩm" },
    { title: "Khoảnh khắc đáng nhớ tại {name}", user: "Đội ngũ truyền thông" },
];

export default function CompanyStories({ companyName = "Doanh nghiệp" }: CompanyStoriesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate semi-random stories based on company name to feel unique
    const stories = useMemo(() => {
        // Use hash of company name to pick stable indices from pools
        const hash = companyName.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
        const absHash = Math.abs(hash);

        return [0, 1, 2].map(i => {
            const imageIdx = (absHash + i) % IMAGE_POOL.length;
            const contentIdx = (absHash + i) % CONTENT_TEMPLATES.length;
            const template = CONTENT_TEMPLATES[contentIdx];
            
            return {
                id: `${absHash}-${i}`,
                imageUrl: IMAGE_POOL[imageIdx],
                title: template.title.replace("{name}", companyName),
                user: template.user,
            };
        });
    }, [companyName]);

    const nextStory = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevStory = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="company-stories-card">
            <div className="stories-header">
                <div className="live-indicator">
                    <span className="dot-pulse"></span>
                    INSIDE {companyName.toUpperCase()}
                </div>
                <h3>Văn hóa công ty</h3>
                <p>Khám phá cuộc sống thực tế tại {companyName} qua góc nhìn nhân viên.</p>
            </div>

            <div className="stories-reel">
                <div className="reel-viewport">
                    <div 
                        className="reel-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {stories.map((s) => (
                            <div key={s.id} className="story-card">
                                <img 
                                    src={s.imageUrl} 
                                    alt={s.title}
                                    loading="lazy"
                                />
                                <div className="story-overlay">
                                    <div className="user-badge">
                                        <div className="avatar-mini">
                                            {s.user.charAt(0)}
                                        </div>
                                        <span>{s.user}</span>
                                    </div>
                                    <h4>{s.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reel-nav">
                    <button className="nav-arrow prev" onClick={prevStory} disabled={currentIndex === 0}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <div className="pagers">
                        {stories.map((_, i) => (
                            <div key={i} className={`pager-dot ${i === currentIndex ? 'active' : ''}`} />
                        ))}
                    </div>
                    <button className="nav-arrow next" onClick={nextStory} disabled={currentIndex === stories.length - 1}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .company-stories-card {
                    padding: 1.5rem;
                    background: var(--bg-card);
                    border: 1.5px solid var(--border);
                    border-radius: 16px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
                
                .stories-header { margin-bottom: 1.5rem; }
                
                .live-indicator {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: var(--primary);
                    letter-spacing: 0.05em;
                    margin-bottom: 0.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 100%;
                }
                
                .dot-pulse {
                    width: 6px;
                    height: 6px;
                    background: var(--cta);
                    border-radius: 50%;
                    box-shadow: 0 0 0 rgba(34, 197, 94, 0.4);
                    animation: pulse 2s infinite;
                    flex-shrink: 0;
                }
                
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                }

                .stories-header h3 { font-size: 1.1rem; font-weight: 700; color: var(--text); margin: 0; }
                .stories-header p { font-size: 0.8rem; color: var(--text-muted); margin: 0.35rem 0 0 0; line-height: 1.4; }

                .reel-viewport {
                    position: relative;
                    aspect-ratio: 4/5;
                    border-radius: 12px;
                    overflow: hidden;
                    background: var(--bg);
                    border: 1px solid var(--border);
                }

                .reel-track {
                    display: flex;
                    height: 100%;
                    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .story-card {
                    min-width: 100%;
                    height: 100%;
                    position: relative;
                }

                .story-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .story-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.5rem 1rem;
                    background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%);
                    color: white;
                }

                .user-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.7rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }

                .avatar-mini {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--primary);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.6rem;
                    flex-shrink: 0;
                }

                .story-overlay h4 { font-size: 0.9rem; font-weight: 600; color: white; margin: 0; line-height: 1.2; }

                .reel-nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;
                }

                .nav-arrow {
                    background: var(--tag-bg);
                    color: var(--primary);
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .nav-arrow:hover:not(:disabled) { background: var(--primary); color: white; }
                .nav-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
                
                .pagers { display: flex; gap: 0.35rem; }
                .pager-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--border); transition: all 0.3s; }
                .pager-dot.active { background: var(--primary); width: 14px; border-radius: 4px; }
            `}</style>
        </div>
    );
}
