"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./index.module.css";

export const Loader = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (!hasVisited) {
            setShowLoading(true);
            sessionStorage.setItem("hasVisited", "true");
        }
    }, []);

    useEffect(() => {
        if (showLoading) {
            gsap.to([leftRef.current, rightRef.current], {
                duration: 1,
                width: "0%",
                ease: "power2.inOut",
                delay: 0.5,
            });
        }
    }, [showLoading]);

    if (!showLoading) return null;

    return (
        <div className={styles.loader}>
            <div ref={leftRef} className={styles.left} />
            <div ref={rightRef} className={styles.right} />
        </div>
    );
};
