"use client";

import React from "react";

interface MatchHeatmapProps {
    score: number; // 0-100
    factors: {
        label: string;
        value: number; // 0-100
    }[];
    size?: number;
}

export default function MatchHeatmap({ score, factors, size = 130 }: MatchHeatmapProps) {
    // Calculate radar points
    const center = size / 2;
    const radius = (size / 2) * 0.75;
    const angleStep = (Math.PI * 2) / factors.length;

    const points = factors.map((f, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const dist = (f.value / 100) * radius;
        const x = center + Math.cos(angle) * dist;
        const y = center + Math.sin(angle) * dist;
        return `${x},${y}`;
    }).join(" ");

    const gridPoints = [20, 40, 60, 80, 100].map(level => {
        return factors.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const dist = (level / 100) * radius;
            const x = center + Math.cos(angle) * dist;
            const y = center + Math.sin(angle) * dist;
            return `${x},${y}`;
        }).join(" ");
    });

    return (
        <div className="match-heatmap-container">
            <div className="heatmap-header">
                <span className="analysis-tag">MATCH ANALYSIS</span>
                <div className="overall-score">
                    <span className="score-num">{score}%</span>
                    <span className="score-label">Phù hợp</span>
                </div>
            </div>

            <div className="heatmap-content">
                <div className="radar-wrapper" style={{ width: size, height: size }}>
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                        {gridPoints.map((gp, i) => (
                            <polygon
                                key={i}
                                points={gp}
                                fill="none"
                                stroke="var(--border)"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                            />
                        ))}

                        {factors.map((_, i) => {
                            const angle = i * angleStep - Math.PI / 2;
                            const x = center + Math.cos(angle) * radius;
                            const y = center + Math.sin(angle) * radius;
                            return (
                                <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="var(--border)" strokeWidth="0.5" />
                            );
                        })}

                        <polygon
                            points={points}
                            className="match-shape"
                            fill="var(--primary)"
                            fillOpacity="0.25"
                            stroke="var(--primary)"
                            strokeWidth="2.5"
                        />
                    </svg>
                </div>

                <div className="factors-legend">
                    {factors.map((f, i) => (
                        <div key={i} className="factor-item">
                            <div className="factor-info">
                                <span className="factor-label">{f.label}</span>
                                <span className="factor-val">{f.value}%</span>
                            </div>
                            <div className="factor-bar-bg">
                                <div className="factor-bar-fill" style={{ width: `${f.value}%`, background: f.value > 80 ? 'var(--cta)' : 'var(--primary)' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="criteria-info">
                Thông số dựa trên phân tích kỹ năng, kinh nghiệm, vị trí và lương so với yêu cầu công việc.
            </div>

            <style jsx>{`
                .match-heatmap-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.5rem;
                    background: transparent;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    width: 100%;
                }
                .heatmap-header {
                    text-align: center;
                    margin-bottom: 2rem;
                    width: 100%;
                }
                .analysis-tag {
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: var(--primary);
                    letter-spacing: 0.12em;
                    background: rgba(var(--primary-rgb), 0.1);
                    padding: 0.35rem 0.75rem;
                    border-radius: 6px;
                }
                .overall-score { margin-top: 1rem; }
                .score-num { font-size: 2.5rem; font-weight: 800; color: var(--text); display: block; line-height: 1; }
                .score-label { font-size: 0.875rem; color: var(--text-muted); font-weight: 600; margin-top: 0.25rem; }

                .heatmap-content {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 3rem;
                    align-items: center;
                    width: 100%;
                    max-width: 800px;
                }

                @media (max-width: 640px) {
                    .heatmap-content {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .score-num { font-size: 2rem; }
                    .heatmap-header { margin-bottom: 1rem; }
                }

                .radar-wrapper { position: relative; margin: 0 auto; }
                .match-shape {
                    animation: pulse 4s infinite ease-in-out;
                    filter: drop-shadow(0 0 6px rgba(var(--primary-rgb), 0.3));
                }
                @keyframes pulse { 0% { fill-opacity: 0.2; } 50% { fill-opacity: 0.4; } 100% { fill-opacity: 0.2; } }

                .factors-legend { width: 100%; display: flex; flex-direction: column; gap: 1rem; }
                .factor-item { display: flex; flex-direction: column; gap: 0.5rem; }
                .factor-info { display: flex; justify-content: space-between; align-items: center; }
                .factor-label { font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.025em; }
                .factor-val { font-size: 0.875rem; font-weight: 800; color: var(--text); }
                .factor-bar-bg { width: 100%; height: 6px; background: var(--border); border-radius: 100px; overflow: hidden; }
                .factor-bar-fill { height: 100%; border-radius: 100px; transition: width 1s cubic-bezier(0.23, 1, 0.32, 1); }

                .criteria-info {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border);
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    line-height: 1.5;
                    text-align: center;
                    width: 100%;
                }
                
                :global([data-theme="dark"]) .match-shape {
                    stroke-width: 3;
                    filter: drop-shadow(0 0 10px rgba(var(--primary-rgb), 0.5));
                }
                
                :global([data-theme="dark"]) .radar-wrapper svg line,
                :global([data-theme="dark"]) .radar-wrapper svg polygon:not(.match-shape) {
                    stroke: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    );
}
