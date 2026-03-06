"use client";

import { useState, useEffect, useCallback } from "react";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getNotifications, markNotificationAsRead, markAllNotificationsAsRead } from "@/app/actions/account";
import Link from "next/link";

interface Notification {
    id: string;
    type: string;
    title: string;
    message: string;
    isRead: boolean;
    link: string | null;
    createdAt: Date;
}

const TYPE_CONFIG: Record<string, { icon: string; color: string }> = {
    APPLICATION_STATUS: { icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", color: "#0369A1" },
    NEW_APPLICATION: { icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z", color: "#22C55E" },
    JOB_APPROVED: { icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", color: "#22C55E" },
    JOB_REJECTED: { icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z", color: "#EF4444" },
    SYSTEM: { icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "#F59E0B" },
};

export default function NotificationsPage({ role, userName }: { role: string; userName: string }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    const loadNotifications = useCallback(async () => {
        setLoading(true);
        const data = await getNotifications(100);
        setNotifications(data as Notification[]);
        setLoading(false);
    }, []);

    useEffect(() => { loadNotifications(); }, [loadNotifications]);

    const handleMarkRead = async (id: string) => {
        await markNotificationAsRead(id);
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    const handleMarkAllRead = async () => {
        await markAllNotificationsAsRead();
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    };

    const unreadCount = notifications.filter(n => !n.isRead).length;

    const timeAgo = (date: Date) => {
        const now = new Date();
        const d = new Date(date);
        const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
        if (diff < 60) return "Vừa xong";
        if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
        return `${Math.floor(diff / 86400)} ngày trước`;
    };

    return (
        <DashboardLayout role={role} userName={userName}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Thông báo</h1>
                    <p className="dash-page-subtitle">
                        {unreadCount > 0 ? `Bạn có ${unreadCount} thông báo chưa đọc` : "Tất cả thông báo đã đọc"}
                    </p>
                </div>
                {unreadCount > 0 && (
                    <button className="dash-btn dash-btn-ghost" onClick={handleMarkAllRead}>
                        Đánh dấu tất cả đã đọc
                    </button>
                )}
            </div>

            <div className="dash-list-card">
                {loading ? (
                    <div className="dash-empty">Đang tải...</div>
                ) : notifications.length === 0 ? (
                    <div className="dash-empty">
                        <div style={{ marginBottom: "0.5rem" }}>
                            <svg width="40" height="40" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.5 }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        Chưa có thông báo nào
                    </div>
                ) : (
                    notifications.map((notif) => {
                        const config = TYPE_CONFIG[notif.type] || TYPE_CONFIG.SYSTEM;
                        const content = (
                            <div className="dash-list-item" style={{ opacity: notif.isRead ? 0.65 : 1, cursor: "pointer" }}
                                onClick={() => !notif.isRead && handleMarkRead(notif.id)}>
                                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", flex: 1 }}>
                                    <div className="dash-stat-icon" style={{ background: `${config.color}15`, flexShrink: 0, width: 36, height: 36, borderRadius: 10 }}>
                                        <svg width="16" height="16" fill="none" stroke={config.color} strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={config.icon} />
                                        </svg>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontWeight: notif.isRead ? 500 : 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: "0.125rem" }}>
                                            {notif.title}
                                            {!notif.isRead && <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#0369A1", marginLeft: 6, verticalAlign: "middle" }} />}
                                        </div>
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{notif.message}</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.375rem", opacity: 0.7 }}>{timeAgo(notif.createdAt)}</div>
                                    </div>
                                </div>
                            </div>
                        );

                        return notif.link ? (
                            <Link key={notif.id} href={notif.link} style={{ textDecoration: "none" }} onClick={() => !notif.isRead && handleMarkRead(notif.id)}>
                                {content}
                            </Link>
                        ) : (
                            <div key={notif.id}>{content}</div>
                        );
                    })
                )}
            </div>
        </DashboardLayout>
    );
}
