"use client";

import React, { useState, useEffect, useRef } from "react";
import { generateAIPath } from "@/app/actions/career";
import {
    MagnifyingGlassPlusIcon,
    MagnifyingGlassMinusIcon,
    MagnifyingGlassIcon,
    ArrowsPointingInIcon,
    SparklesIcon,
    BriefcaseIcon,
    XMarkIcon,
    ArrowPathIcon,
    ClockIcon,
    ArrowDownTrayIcon
} from "@heroicons/react/24/outline";
import { toPng } from 'html-to-image';

interface CareerNode {
    id: string;
    label: string;
    level: "junior" | "mid" | "senior" | "lead";
    salary: string;
    demand: "Low" | "Medium" | "High";
    description?: string;
    promotion_time?: string;
    skills: string[];
    children?: CareerNode[];
}

export default function CareerTree() {
    const [roadmap, setRoadmap] = useState<CareerNode | null>(null);
    const [selectedNode, setSelectedNode] = useState<CareerNode | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Zoom & Pan State
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [activePathIds, setActivePathIds] = useState<string[]>([]);

    useEffect(() => {
        if (!selectedNode || !roadmap) {
            setActivePathIds([]);
            return;
        }

        const findPath = (current: CareerNode, targetId: string, path: string[]): string[] | null => {
            if (current.id === targetId) return [...path, current.id];
            if (current.children) {
                for (const child of current.children) {
                    const result = findPath(child, targetId, [...path, current.id]);
                    if (result) return result;
                }
            }
            return null;
        };

        const path = findPath(roadmap, selectedNode.id, []);
        setActivePathIds(path || []);
    }, [selectedNode, roadmap]);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const exportRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    const fetchRoadmap = async (query?: string) => {
        setLoading(true);
        try {
            const data = await generateAIPath(query);
            if (data) {
                setRoadmap(data);
                setSelectedNode(data);
                setScale(1);

                // Initial center offset logic
                const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
                const isMobile = winWidth < 1200;
                setOffset({
                    x: isMobile ? 20 : 100,
                    y: isMobile ? -650 : -450
                });
            }
        } catch (e) {
            console.error("AI Roadmap error:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchRoadmap(); }, []);

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.15, 2.5));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.15, 0.4));

    // Improved reset to center and focus on the roadmap
    const handleReset = () => {
        if (!roadmap || !containerRef.current) {
            setScale(1);
            setOffset({ x: 100, y: -450 });
            return;
        }

        const bounds = getTreeBounds(roadmap, 200, 800, 480, 350);
        const container = containerRef.current.getBoundingClientRect();

        // Calculate the ideal scale to fit the tree if it is too big
        const padding = 100;
        const treeW = bounds.maxX - bounds.minX + padding;
        const treeH = bounds.maxY - bounds.minY + padding;
        const scaleW = container.width / treeW;
        const scaleH = container.height / treeH;
        const idealScale = Math.min(1, Math.min(scaleW, scaleH));

        setScale(idealScale);

        // Center the tree
        const treeCenterX = (bounds.minX + bounds.maxX) / 2;
        const treeCenterY = (bounds.minY + bounds.maxY) / 2;

        setOffset({
            x: (container.width / 2) - (treeCenterX * idealScale),
            y: (container.height / 2) - (treeCenterY * idealScale)
        });
    };

    const handleReload = () => {
        if (confirm("Bạn có muốn tạo lại lộ trình sự nghiệp mới bằng AI không?")) {
            fetchRoadmap(searchQuery || undefined);
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            setScale(prev => Math.min(Math.max(prev + delta, 0.4), 2.5));
        }
    };

    const getTreeBounds = (node: CareerNode, x: number, y: number, stepX: number, verticalStep: number, bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }) => {
        const nodeW = 180;
        const nodeH = 110;
        bounds.minX = Math.min(bounds.minX, x);
        bounds.minY = Math.min(bounds.minY, y);
        bounds.maxX = Math.max(bounds.maxX, x + nodeW);
        bounds.maxY = Math.max(bounds.maxY, y + nodeH);

        node.children?.forEach((child, i) => {
            const childY = y + (i - (node.children!.length - 1) / 2) * verticalStep;
            getTreeBounds(child, x + stepX, childY, stepX, verticalStep, bounds);
        });
        return bounds;
    };

    const handleDownload = async () => {
        if (!roadmap || !exportRef.current || downloading) return;
        setDownloading(true);
        try {
            const bounds = getTreeBounds(roadmap, 200, 800, 480, 350);
            const padding = 80;
            const width = bounds.maxX - bounds.minX + padding * 2;
            const height = bounds.maxY - bounds.minY + padding * 2;

            // Mark as exporting to trigger Light Mode CSS globally
            exportRef.current.setAttribute('data-exporting', 'true');

            // Slightly longer delay to ensure all CSS (especially !important) is applied
            await new Promise(r => setTimeout(r, 300));

            const dataUrl = await toPng(exportRef.current as HTMLElement, {
                cacheBust: true,
                backgroundColor: '#ffffff', // Force White Background
                width: width,
                height: height,
                pixelRatio: 2.5, // Ultra-sharp
                style: {
                    transform: `translate(${-bounds.minX + padding}px, ${-bounds.minY + padding}px)`,
                    width: `${width}px`,
                    height: `${height}px`,
                }
            });

            const link = document.createElement('a');
            link.download = `career-roadmap-${new Date().getTime()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Export error:', err);
        } finally {
            if (exportRef.current) exportRef.current.removeAttribute('data-exporting');
            setDownloading(false);
        }
    };

    const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const pos = 'touches' in e ? e.touches[0] : e;
        lastMousePos.current = { x: pos.clientX, y: pos.clientY };
    };

    const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const pos = 'touches' in e ? e.touches[0] : e;
        const dx = pos.clientX - lastMousePos.current.x;
        const dy = pos.clientY - lastMousePos.current.y;
        setOffset(prev => ({ x: prev.x + dx, y: prev.y + dy }));
        lastMousePos.current = { x: pos.clientX, y: pos.clientY };
    };

    const onMouseUp = () => setIsDragging(false);

    const renderNodes = (node: CareerNode, x: number, y: number, stepX: number) => {
        const verticalStep = 350;

        return (
            <React.Fragment key={node.id}>
                {node.children?.map((child, i) => {
                    const childX = x + stepX;
                    const childY = y + (i - (node.children!.length - 1) / 2) * verticalStep;

                    // Highlight logic: Connection is active if the target (child) is part of selected node's ancestry
                    const isActive = activePathIds.includes(child.id);
                    const isNodeSelected = selectedNode?.id === node.id || selectedNode?.id === child.id;
                    return (
                        <g key={`connection-${child.id}`}>
                            <path
                                d={`M ${x + 185} ${y + 55} C ${x + 265} ${y + 55}, ${childX - 85} ${childY + 55}, ${childX - 5} ${childY + 55}`}
                                stroke="var(--primary)"
                                strokeWidth={isActive ? "2.5" : "1.5"}
                                strokeDasharray={isActive ? "0" : "6,4"}
                                fill="none"
                                opacity={isActive ? "0.8" : "0.2"}
                                style={{ transition: 'all 0.3s ease' }}
                            />
                        </g>
                    );
                })}

                <foreignObject x={x} y={y} width="180" height="250" style={{ overflow: "visible" }}>
                    <div
                        className={`career-node-v4 ${selectedNode?.id === node.id ? 'active' : ''} ${node.level}`}
                        onClick={(e) => { e.stopPropagation(); setSelectedNode(node); }}
                    >
                        <div className="node-v4-content">
                            <div className="node-v4-header">
                                <span className={`node-v4-badge ${node.level}`}>{node.level}</span>
                                {node.promotion_time && (
                                    <div className="node-v4-time-pill">
                                        <ClockIcon width={12} height={12} className="w-3 h-3 flex-shrink-0" />
                                        <span>{node.promotion_time}</span>
                                    </div>
                                )}
                            </div>
                            <div className="node-v4-title-full">{node.label}</div>
                            <div className="node-v4-meta-row">
                                <div className="node-v4-salary-pill">{node.salary}</div>
                            </div>
                        </div>
                    </div>
                </foreignObject>

                {node.children?.map((child, i) => {
                    return renderNodes(child, x + stepX, y + (i - (node.children!.length - 1) / 2) * verticalStep, stepX);
                })}
            </React.Fragment>
        );
    };

    return (
        <div className="career-advanced-container">
            <div className="advanced-header">
                <div className="glow-badge">
                    <SparklesIcon className="w-4 h-4" /> AI CAREER INTELLIGENCE
                </div>
                <h2>Biểu đồ lộ trình sự nghiệp công nghệ</h2>
                <p>Khám phá con đường tối ưu để vươn tới các vị trí cao cấp hơn dựa trên dữ liệu thật.</p>
            </div>

            <div className="advanced-workspace">
                <div
                    className={`viz-main-frame ${isDragging ? 'grabbing' : ''}`}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onTouchStart={onMouseDown}
                    onTouchMove={onMouseMove}
                    onTouchEnd={onMouseUp}
                    onWheel={handleWheel}
                >
                    <div className="viz-search-bar">
                        <div className="search-input-wrapper">
                            <MagnifyingGlassIcon className="w-5 h-5 search-icon" />
                            <input
                                type="text"
                                placeholder="Khám phá lộ trình khác (VD: Product Manager...)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && fetchRoadmap(searchQuery)}
                            />
                        </div>
                    </div>
                    {loading ? (
                        <div className="viz-loading-overlay">
                            <div className="loading-orbit">
                                <div className="orbit-core" />
                                <div className="orbit-moon" />
                            </div>
                            <span>Đang tính toán và tạo lộ trình...</span>
                        </div>
                    ) : roadmap ? (
                        <div
                            ref={exportRef}
                            className="viz-zoom-container"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)'
                            }}
                        >
                            <svg ref={svgRef} width="4000" height="2000" className="viz-svg-canvas">
                                {renderNodes(roadmap, 200, 800, 480)}
                            </svg>
                        </div>
                    ) : (
                        <div className="viz-error-state">
                            <p>Opps! AI không tìm thấy dữ liệu Roadmap của bạn.</p>
                            <button onClick={() => fetchRoadmap(searchQuery)} className="retry-action">Hãy thử lại</button>
                        </div>
                    )}

                    <div className="viz-floating-controls">
                        <div className="control-group">
                            <button onClick={handleZoomIn} title="Phóng to"><MagnifyingGlassPlusIcon className="w-5 h-5" /></button>
                            <button onClick={handleReset} title="Mặc định"><ArrowsPointingInIcon className="w-5 h-5" /></button>
                            <button onClick={handleZoomOut} title="Thu nhỏ"><MagnifyingGlassMinusIcon className="w-5 h-5" /></button>
                            <div className="control-divider" />
                            <button onClick={handleDownload} className="download-btn" title="Lưu biểu đồ" disabled={downloading}>
                                {downloading ? (
                                    <div className="download-spinner" />
                                ) : (
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                )}
                            </button>
                            <button onClick={handleReload} className="reload-btn" title="Tạo mới lộ trình"><ArrowPathIcon className="w-5 h-5" /></button>
                        </div>
                        <div className="zoom-text">{Math.round(scale * 100)}%</div>
                    </div>
                </div>

                {/* Side Info Panel */}
                <div className={`viz-side-panel ${selectedNode ? 'visible' : ''}`}>
                    {selectedNode && (
                        <div className="panel-inner">
                            <div className="panel-scroll-content scrollbar-hide">
                                <button className="panel-close-btn" onClick={() => setSelectedNode(null)}>
                                    <XMarkIcon className="w-6 h-6" />
                                </button>

                                <h3 className="panel-title-text">{selectedNode.label}</h3>

                                <div className="panel-card-section">
                                    <label>THU NHẬP ƯỚC TÍNH</label>
                                    <div className="salary-range">{selectedNode.salary}</div>
                                </div>

                                {selectedNode.description && (
                                    <div className="panel-card-section">
                                        <label>MÔ TẢ CÔNG VIỆC</label>
                                        <p className="panel-description-text">{selectedNode.description}</p>
                                    </div>
                                )}

                                {selectedNode.promotion_time && (
                                    <div className="panel-card-section">
                                        <label>THỜI GIAN THĂNG TIẾN DỰ KIẾN</label>
                                        <div className="promotion-time-badge">
                                            <ClockIcon className="w-5 h-5" />
                                            <span>{selectedNode.promotion_time}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="panel-card-section">
                                    <label>KỸ NĂNG CẦN THIẾT</label>
                                    <div className="skill-tags-v3">
                                        {selectedNode.skills.map(s => <span key={s}>{s}</span>)}
                                    </div>
                                </div>
                            </div>

                            <div className="panel-footer-action">
                                <div className="footer-meta-dock">
                                    <span className={`stat-pill ${selectedNode.level}`}>{selectedNode.level.toUpperCase()} LEVEL</span>
                                    <div className={`demand-status ${selectedNode.demand.toLowerCase()}`}>
                                        <span className="demand-label">Cơ hội việc làm:</span>
                                        <strong>{selectedNode.demand === 'High' ? 'Rất cao' : selectedNode.demand === 'Medium' ? 'Trung bình' : 'Ổn định'}</strong>
                                    </div>
                                </div>
                                <button className="panel-cta-btn">
                                    <BriefcaseIcon className="w-5 h-5" />
                                    <span>Xem việc làm ngay</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .career-advanced-container { padding: 4rem 1.5rem; background: var(--bg); min-height: 100vh; font-family: 'Inter', 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
                @media (max-width: 1199px) { .career-advanced-container { padding: 1.5rem 0.5rem; } }
                
                .advanced-header { text-align: center; margin-bottom: 3rem; }
                .advanced-header h2 { font-size: 2.5rem; font-weight: 900; color: var(--text); margin: 0.75rem 0; letter-spacing: -0.04em; background: linear-gradient(135deg, var(--text) 0%, var(--primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .advanced-header p { color: var(--text-muted); font-size: 1rem; max-width: 600px; margin: 0 auto; line-height: 1.6; }
                @media (max-width: 768px) { .advanced-header h2 { font-size: 1.75rem; } }
                
                .glow-badge { 
                    display: inline-flex; align-items: center; gap: 0.5rem; 
                    background: rgba(var(--primary-rgb), 0.08); color: var(--primary); 
                    padding: 0.5rem 1.25rem; border-radius: 100px; font-size: 0.75rem; font-weight: 800;
                    border: 1px solid rgba(var(--primary-rgb), 0.2); backdrop-filter: blur(4px);
                }

                .advanced-workspace { 
                    display: grid; grid-template-columns: 1fr; gap: 2rem; 
                    height: 800px; max-width: 1440px; margin: 0 auto; position: relative;
                }
                @media (max-width: 1199px) { .advanced-workspace { height: 75vh; } }
                @media (min-width: 1200px) { .advanced-workspace { grid-template-columns: 1fr 360px; } }

                .viz-search-bar { position: absolute; top: 1.5rem; left: 50%; transform: translateX(-50%); z-index: 50; width: 100%; max-width: 520px; padding: 0 1.5rem; }
                .search-input-wrapper { display: flex; align-items: center; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1.5px solid var(--border); border-radius: 100px; padding: 0.4rem 0.5rem 0.4rem 1.5rem; gap: 0.75rem; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
                .search-input-wrapper:focus-within { border-color: var(--primary); box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.15); transform: translateY(-2px); background: white; }
                .search-input-wrapper input { border: none; outline: none; flex: 1; font-size: 0.95rem; font-weight: 600; color: var(--text); background: transparent; }
                .search-input-wrapper input::placeholder { color: var(--text-muted); font-weight: 500; opacity: 0.6; }
                .search-icon { color: var(--primary); }

                :global([data-theme="dark"]) .search-input-wrapper { background: rgba(15, 23, 42, 0.7); border-color: rgba(255,255,255,0.1); }
                :global([data-theme="dark"]) .search-input-wrapper input { color: white; }

                .viz-main-frame { 
                    background: var(--bg-card); border: 1.5px solid var(--border); border-radius: 32px; 
                    position: relative; overflow: hidden; box-shadow: var(--shadow-xl); cursor: grab;
                    touch-action: none; overscroll-behavior: contain;
                }
                .viz-main-frame.grabbing { cursor: grabbing; }

                .viz-zoom-container { width: 100%; height: 100%; transform-origin: top left; }
                .viz-svg-canvas { background: radial-gradient(circle, var(--border) 1px, transparent 1px); background-size: 60px 60px; }
                :global(.viz-main-frame[data-exporting="true"] .viz-svg-canvas) { background: none !important; }

                /* Global styles for SVG ForeignObject content */
                :global(.career-node-v4) { 
                    position: relative; width: 180px; min-height: 110px; height: auto;
                    padding: 0.8rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 16px; transition: all 0.3s ease;
                    user-select: none; cursor: pointer; display: flex; flex-direction: column;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                }
                :global([data-exporting="true"] .career-node-v4) { 
                    background: #ffffff !important; backdrop-filter: none !important; 
                    border: 1px solid #cbd5e1 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.06) !important;
                    opacity: 1 !important; visibility: visible !important;
                }
                :global([data-exporting="true"] .w-3) { width: 12px !important; height: 12px !important; }
                :global([data-exporting="true"] .node-v4-title-full) { color: #0f172a !important; font-weight: 800 !important; }
                :global([data-exporting="true"] .node-v4-time-pill) { color: #64748b !important; }
                :global([data-exporting="true"] .node-v4-salary-pill) { color: #2563eb !important; }
                
                /* Keep Badge Colors in Export */
                :global([data-exporting="true"] .node-v4-badge.junior) { background: #f0fdf4 !important; color: #16a34a !important; visibility: visible !important; opacity: 1 !important; }
                :global([data-exporting="true"] .node-v4-badge.mid) { background: #eff6ff !important; color: #2563eb !important; visibility: visible !important; opacity: 1 !important; }
                :global([data-exporting="true"] .node-v4-badge.senior) { background: #faf5ff !important; color: #9333ea !important; visibility: visible !important; opacity: 1 !important; }
                :global([data-exporting="true"] .node-v4-badge.lead) { background: #fff7ed !important; color: #ea580c !important; visibility: visible !important; opacity: 1 !important; }
                
                /* Subtle Paths in Export (Uniformly, no highlights for active nodes) */
                :global([data-exporting="true"] path) { 
                    stroke: #cbd5e1 !important; 
                    opacity: 0.3 !important; 
                    stroke-width: 1.5px !important; 
                    stroke-dasharray: 6,4 !important; 
                }

                :global([data-theme="dark"] .career-node-v4) { background: rgba(30, 41, 59, 0.9); border-color: rgba(255,255,255,0.1); }

                :global(.career-node-v4:hover) { transform: translateY(-3px); border-color: var(--primary); box-shadow: 0 8px 20px rgba(0,0,0,0.12); }
                :global(.career-node-v4.active) { border-color: var(--primary); background: white; box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.2); border-width: 2px; }
                :global([data-theme="dark"] .career-node-v4.active) { background: #1e293b; }

                :global(.node-v4-content) { height: 100%; display: flex; flex-direction: column; justify-content: space-between; position: relative; z-index: 2; }
                :global(.node-v4-header) { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem; width: 100%; }
                :global(.node-v4-badge) { font-size: 0.55rem; font-weight: 800; text-transform: uppercase; padding: 0.15rem 0.4rem; border-radius: 4px; letter-spacing: 0.05em; }
                :global(.node-v4-badge.junior) { background: #f0fdf4; color: #16a34a; }
                :global(.node-v4-badge.mid) { background: #eff6ff; color: #2563eb; }
                :global(.node-v4-badge.senior) { background: #faf5ff; color: #9333ea; }
                :global(.node-v4-badge.lead) { background: #fff7ed; color: #ea580c; }
                
                :global(.node-v4-title-full) { 
                    font-size: 0.8rem; font-weight: 800; color: #1e293b; line-height: 1.25; 
                    margin: 0.35rem 0; min-height: 2.2rem; display: flex; align-items: center;
                    word-break: break-word; overflow-wrap: break-word;
                }
                :global([data-theme="dark"] .node-v4-title-full) { color: #f8fafc; }
                
                :global(.node-v4-meta-row) { display: flex; align-items: center; gap: 0.4rem; }
                :global(.node-v4-salary-pill) { font-size: 0.7rem; font-weight: 800; color: var(--primary); }
                :global(.node-v4-time-pill) { 
                    display: flex; align-items: center; gap: 0.2rem; 
                    font-size: 0.55rem; font-weight: 700; color: var(--text-muted); opacity: 0.8;
                }

                .viz-floating-controls { 
                    position: absolute; bottom: 1.5rem; left: 1.5rem; display: flex; align-items: center; gap: 0.75rem; 
                    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); padding: 0.5rem; border-radius: 20px; 
                    border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 50;
                }
                :global([data-theme="dark"] .viz-floating-controls) { background: rgba(30, 41, 59, 0.85); }
                .control-group { display: flex; align-items: center; gap: 0.25rem; }
                .control-group button { 
                    width: 36px; height: 36px; border: none; border-radius: 14px; background: transparent; 
                    color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }
                .control-group button:hover { background: var(--tag-bg); color: var(--primary); }
                .control-divider { width: 1.5px; height: 18px; background: var(--border); margin: 0 0.5rem; }
                .reload-btn:hover { color: var(--cta) !important; background: rgba(245, 158, 11, 0.1) !important; }
                .download-btn:hover { color: #10b981 !important; background: rgba(16, 185, 129, 0.1) !important; }
                .download-spinner { width: 18px; height: 18px; border: 2px solid var(--border); border-top-color: #10b981; border-radius: 50%; animation: spin 0.8s linear infinite; }
                @keyframes spin { to { transform: rotate(360deg); } }
                .zoom-text { font-size: 0.75rem; font-weight: 800; color: var(--text); padding: 0 0.5rem; min-width: 45px; text-align: center; }

                .viz-side-panel { background: var(--bg-card); border-radius: 32px; border: 2.5px solid var(--border); height: 100%; overflow: hidden; box-shadow: var(--shadow-xl); position: relative; }
                @media (max-width: 1199px) {
                    .viz-side-panel { position: fixed; bottom: 0; left: 0; right: 0; height: auto; max-height: 80vh; transform: translateY(100%); z-index: 100; border-radius: 32px 32px 0 0; border: none; transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1); background: var(--bg-card); }
                    .viz-side-panel.visible { transform: translateY(0); box-shadow: 0 -10px 40px rgba(0,0,0,0.1); }
                }

                .panel-inner { display: flex; flex-direction: column; height: 100%; }
                .panel-scroll-content { flex: 1; overflow-y: auto; padding: 2.5rem 2rem 0.5rem; }
                
                .panel-footer-action { padding: 1.25rem 2rem 2rem; background: var(--bg-card); border-top: 1.5px solid var(--border); display: flex; flex-direction: column; gap: 1rem; }
                .footer-meta-dock { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.25rem; }
                
                .stat-pill { font-size: 0.65rem; font-weight: 800; padding: 0.35rem 0.75rem; border-radius: 8px; border: 1.5px solid var(--border); }
                .stat-pill.junior { background: #f0fdf4; color: #16a34a; }
                .stat-pill.mid { background: #eff6ff; color: #2563eb; }
                .stat-pill.senior { background: #faf5ff; color: #9333ea; }
                .stat-pill.lead { background: #fff7ed; color: #ea580c; }

                .panel-close-btn { position: absolute; top: 1.25rem; right: 1.25rem; background: var(--bg); border: 1.5px solid var(--border); border-radius: 10px; width: 36px; height: 36px; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: all 0.2s; }
                .panel-close-btn:hover { color: var(--text); border-color: var(--text-muted); background: white; }
                
                .panel-title-text { font-size: 1.3rem; font-weight: 800; color: var(--text); margin-bottom: 2rem; line-height: 1.25; letter-spacing: -0.01em; padding-right: 3.5rem; }
                
                .panel-card-section { margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
                .panel-card-section.inline { flex-direction: row; justify-content: space-between; align-items: center; }
                .panel-card-section label { display: block; font-size: 0.65rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; }
                .panel-description-text { font-size: 0.95rem; line-height: 1.6; color: var(--text); opacity: 0.85; font-weight: 500; }
                
                .salary-range { font-size: 1.5rem; font-weight: 900; color: var(--primary); letter-spacing: -0.01em; }
                .promotion-time-badge { display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem 1rem; background: var(--tag-bg); border-radius: 12px; font-weight: 800; color: var(--text); border: 1.5px solid var(--border); margin-top: 0.2rem; font-size: 0.95rem; }
                .skill-tags-v3 { display: flex; flex-wrap: wrap; gap: 0.4rem; }
                .skill-tags-v3 span { background: var(--bg); border: 1.5px solid var(--border); color: var(--text); padding: 0.35rem 0.75rem; border-radius: 10px; font-size: 0.7rem; font-weight: 700; }
                
                .demand-status { font-size: 0.75rem; display: flex; align-items: center; gap: 0.35rem; }
                .demand-label { color: var(--text-muted); font-weight: 700; }
                .demand-status.high strong { color: #ef4444; }
                .demand-status.medium strong { color: #d97706; }
                .demand-status.low strong { color: #4b5563; }

                .panel-cta-btn { 
                    width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.625rem; 
                    padding: 1rem; background: var(--primary); color: white; border: none; border-radius: 16px; 
                    font-size: 1rem; font-weight: 800; cursor: pointer; transition: all 0.3s;
                }
                .panel-cta-btn:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.3); }

                .viz-loading-overlay { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 2.5rem; text-align: center; padding: 2rem; background: rgba(255,255,255,0.7); backdrop-filter: blur(8px); z-index: 100; position: absolute; inset: 0; }
                .loading-orbit { width: 100px; height: 100px; position: relative; }
                .orbit-core { position: absolute; inset: 30px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 30px var(--primary); animation: pulse 2s infinite; }
                .orbit-moon { position: absolute; width: 16px; height: 16px; background: var(--cta); border-radius: 50%; top: 0; left: 50%; margin-left: -8px; animation: rotate 2.5s linear infinite; transform-origin: center 50px; }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0% { opacity: 0.4; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } 100% { opacity: 0.4; transform: scale(0.8); } }

                /* Scrollbar */
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
