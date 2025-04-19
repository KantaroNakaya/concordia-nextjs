"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => {
        setIsOpen(false);
        localStorage.setItem("modalShown", "true");
    }, []);

    useEffect(() => {
        const hasModalBeenShown = localStorage.getItem("modalShown");

        if (!hasModalBeenShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2400);

            return () => clearTimeout(timer);
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={handleClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <ul className={styles.msgList}>
                    <li>当サイトは架空ホテルのデモサイトです。</li>
                    <li><span className={styles.bold}>Next.js</span>（Reactフレームワーク）で作成しています。</li>
                    <li>以下は詳細です。</li>
                </ul>
                <ul className={styles.msgList}>
                    <li>・ニュースや部屋情報の更新には<span className={styles.bold}>MicroCMS</span>を使用</li>
                    <li>・問い合わせ機能には<span className={styles.bold}>Hubspot</span>を使用</li>
                </ul>

                <button className={styles.closeButton} onClick={handleClose}>
                    閉じる
                </button>
            </div>
        </div>
    );
};
