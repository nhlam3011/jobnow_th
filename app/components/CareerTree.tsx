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
    ArrowPathIcon
} from "@heroicons/react/24/outline";

interface CareerNode {
    id: string;
    label: string;
    level: "junior" | "mid" | "senior" | "lead";
    salary: string;
    demand: "Low" | "Medium" | "High";
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
    const lastMousePos = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

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

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2.5));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.4));

    // Improved reset to center root node (200, 800)
    const handleReset = () => {
        setScale(1);
        const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const isMobile = winWidth < 1200;
        setOffset({
            x: isMobile ? 20 : 100,
            y: isMobile ? -650 : -450
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
        // Significantly wider vertical spacing for tails
        const verticalStep = 320;

        return (
            <React.Fragment key={node.id}>
                {node.children?.map((child, i) => {
                    const childX = x + stepX;
                    const childY = y + (i - (node.children!.length - 1) / 2) * verticalStep;
                    return (
                        <g key={`connection-${child.id}`}>
                            <path
                                d={`M ${x + 145} ${y + 40} C ${x + 220} ${y + 40}, ${childX - 80} ${childY + 40}, ${childX} ${childY + 40}`}
                                stroke="var(--primary)" strokeWidth="2" strokeDasharray="6,4" fill="none" opacity="0.6"
                            />
                        </g>
                    );
                })}

                <foreignObject x={x} y={y} width="150" height="85" style={{ overflow: "visible" }}>
                    <div
                        className={`career-node-v3 ${selectedNode?.id === node.id ? 'active' : ''} ${node.level}`}
                        onClick={(e) => { e.stopPropagation(); setSelectedNode(node); }}
                    >
                        <div className="node-v3-badge">{node.level}</div>
                        <div className="node-v3-title">{node.label}</div>
                        <div className="node-v3-meta">{node.salary}</div>
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
                <h2>Bản đồ lộ trình sự nghiệp công nghệ</h2>
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
                            className="viz-zoom-container"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)'
                            }}
                        >
                            <svg width="4000" height="2000" className="viz-svg-canvas">
                                {renderNodes(roadmap, 200, 800, 420)}
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
                .career-advanced-container { padding: 4rem 1.5rem; background: var(--bg); min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
                @media (max-width: 1199px) { .career-advanced-container { padding: 2rem 0.75rem; } }
                
                .advanced-header { text-align: center; margin-bottom: 2.5rem; }
                .advanced-header h2 { font-size: 2rem; font-weight: 800; color: var(--text); margin: 0.5rem 0; letter-spacing: -0.02em; }
                .advanced-header p { color: var(--text-muted); font-size: 0.95rem; max-width: 600px; margin: 0 auto; }
                
                .glow-badge { 
                    display: inline-flex; align-items: center; gap: 0.5rem; 
                    background: rgba(var(--primary-rgb), 0.1); color: var(--primary); 
                    padding: 0.4rem 1rem; border-radius: 100px; font-size: 0.7rem; font-weight: 800; 
                }

                .advanced-workspace { 
                    display: grid; grid-template-columns: 1fr; gap: 1.5rem; 
                    height: 750px; max-width: 1440px; margin: 0 auto; position: relative;
                }
                @media (max-width: 1199px) { .advanced-workspace { height: 80vh; } }
                @media (min-width: 1200px) { .advanced-workspace { grid-template-columns: 1fr 340px; } }

                .viz-search-bar { position: absolute; top: 1.5rem; left: 50%; transform: translateX(-50%); z-index: 50; width: 100%; max-width: 480px; padding: 0 1.25rem; }
                .search-input-wrapper { display: flex; align-items: center; background: white; border: 2.5px solid var(--border); border-radius: 99px; padding: 0.35rem 0.5rem 0.35rem 1.25rem; gap: 0.75rem; box-shadow: 0 10px 25px rgba(0,0,0,0.06); transition: all 0.3s; }
                .search-input-wrapper:focus-within { border-color: var(--primary); box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.12); }
                .search-input-wrapper input { border: none; outline: none; flex: 1; font-size: 0.9rem; font-weight: 600; color: var(--text); background: transparent; }
                .search-input-wrapper input::placeholder { color: var(--text-muted); font-weight: 500; }
                .search-icon { color: var(--text-muted); }

                :global([data-theme="dark"]) .search-input-wrapper { background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(10px); border-color: rgba(255,255,255,0.1); }
                :global([data-theme="dark"]) .search-input-wrapper input { color: white; }

                .viz-main-frame { 
                    background: var(--bg-card); border: 2px solid var(--border); border-radius: 28px; 
                    position: relative; overflow: hidden; box-shadow: var(--shadow-md); cursor: grab;
                }
                .viz-main-frame.grabbing { cursor: grabbing; }

                .viz-zoom-container { width: 100%; height: 100%; transform-origin: top left; }
                .viz-svg-canvas { background: radial-gradient(circle, var(--border) 0.5px, transparent 0.5px); background-size: 80px 80px; }

                .career-node-v3 { 
                    padding: 0.65rem 0.75rem; background: var(--bg-card); border: 2px solid var(--border); 
                    border-radius: 14px; transition: all 0.3s; user-select: none; width: 145px; height: 85px;
                    display: flex; flex-direction: column; justify-content: space-between;
                }
                .career-node-v3:hover { border-color: var(--primary); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                .career-node-v3.active { border-color: var(--primary); background: white; box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.15); }

                .node-v3-badge { font-size: 0.45rem; font-weight: 900; text-transform: uppercase; padding: 0.1rem 0.4rem; border-radius: 4px; width: fit-content; margin-bottom: 0.25rem; letter-spacing: 0.05em; flex-shrink: 0; }
                .junior .node-v3-badge { background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; }
                .mid .node-v3-badge { background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; }
                .senior .node-v3-badge { background: #faf5ff; color: #9333ea; border: 1px solid #e9d5ff; }
                .lead .node-v3-badge { background: #fffbeb; color: #d97706; border: 1px solid #fde68a; }

                .node-v3-title { font-size: 0.7rem; font-weight: 800; color: #1e293b; line-height: 1.25; margin-bottom: 0.15rem; height: 2rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .node-v3-meta { font-size: 0.65rem; font-weight: 800; color: #059669; height: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }

                .viz-floating-controls { 
                    position: absolute; bottom: 1.25rem; right: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; 
                    background: var(--bg-card); padding: 0.5rem; border-radius: 14px; border: 1.5px solid var(--border); box-shadow: var(--shadow-md); z-index: 5;
                }
                .control-group { display: flex; flex-direction: column; gap: 0.4rem; }
                .control-group button { 
                    width: 38px; height: 38px; border: none; border-radius: 10px; background: transparent; 
                    color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }
                .control-group button:hover { background: var(--tag-bg); color: var(--primary); }
                .control-divider { height: 1.5px; background: var(--border); margin: 0.25rem 0; }
                .reload-btn:hover { color: var(--cta) !important; background: rgba(245, 158, 11, 0.1) !important; }
                
                .zoom-text { border-top: 1px solid var(--border); padding-top: 0.4rem; text-align: center; font-size: 0.7rem; font-weight: 800; color: var(--text-muted); }

                .viz-side-panel { background: var(--bg-card); border-radius: 32px; border: 2.5px solid var(--border); height: 100%; overflow: hidden; box-shadow: var(--shadow-xl); position: relative; }
                @media (max-width: 1199px) {
                    .viz-side-panel { position: fixed; bottom: 0; left: 0; right: 0; height: auto; max-height: 80vh; transform: translateY(100%); z-index: 100; border-radius: 32px 32px 0 0; border: none; transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1); }
                    .viz-side-panel.visible { transform: translateY(0); box-shadow: 0 -10px 40px rgba(0,0,0,0.1); }
                }

                .panel-inner { display: flex; flex-direction: column; height: 100%; }
                .panel-scroll-content { flex: 1; overflow-y: auto; padding: 2.5rem 2rem 0.5rem; }
                
                .panel-footer-action { padding: 1.25rem 2rem 2rem; background: var(--bg-card); border-top: 1.5px solid var(--border); display: flex; flex-direction: column; gap: 1rem; }
                .footer-meta-dock { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.25rem; }
                
                .stat-pill { font-size: 0.65rem; font-weight: 800; padding: 0.35rem 0.75rem; border-radius: 8px; border: 1.5px solid var(--border); }
                .stat-pill.junior { background: #dcfce7; color: #15803d; border-color: #bbf7d0; }
                .stat-pill.mid { background: #dbeafe; color: #1d4ed8; border-color: #bfdbfe; }
                .stat-pill.senior { background: #f3e8ff; color: #7e22ce; border-color: #e9d5ff; }
                .stat-pill.lead { background: #fef3c7; color: #b45309; border-color: #fde68a; }

                .panel-close-btn { position: absolute; top: 1.25rem; right: 1.25rem; background: var(--bg); border: 1.5px solid var(--border); border-radius: 10px; width: 36px; height: 36px; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; transition: all 0.2s; }
                .panel-close-btn:hover { color: var(--text); border-color: var(--text-muted); background: white; }
                
                .panel-title-text { font-size: 1.3rem; font-weight: 800; color: var(--text); margin-bottom: 2rem; line-height: 1.25; letter-spacing: -0.01em; padding-right: 3.5rem; }
                
                .panel-card-section { margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
                .panel-card-section.inline { flex-direction: row; justify-content: space-between; align-items: center; }
                .panel-card-section label { display: block; font-size: 0.65rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; }
                
                .salary-range { font-size: 1.5rem; font-weight: 900; color: var(--primary); letter-spacing: -0.01em; }
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

                .viz-loading-overlay { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 2rem; text-align: center; padding: 2rem; }
                .loading-orbit { width: 80px; height: 80px; position: relative; }
                .orbit-core { position: absolute; inset: 25px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 20px var(--primary); }
                .orbit-moon { position: absolute; width: 12px; height: 12px; background: var(--cta); border-radius: 50%; top: 0; left: 50%; margin-left: -6px; animation: rotate 2s linear infinite; transform-origin: center 40px; }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}
