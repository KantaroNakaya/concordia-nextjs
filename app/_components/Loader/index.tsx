"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./index.module.css";

export const Loader = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
            setIsFirstVisit(true);
            localStorage.setItem("hasVisited", "true");
        }
    }, []);

    useEffect(() => {
        if (isFirstVisit) {
            const tl = gsap.timeline();

            tl.to([leftRef.current, rightRef.current], {
                duration: 1,
                width: "0%",
                ease: "power2.inOut",
                delay: 0.5,
            });
        }
    }, [isFirstVisit]);

    if (!isFirstVisit) return null;

    return (
        <div className={styles.loader}>
            <div ref={leftRef} className={styles.left} />
            <div ref={rightRef} className={styles.right} />
        </div>
    );
};
