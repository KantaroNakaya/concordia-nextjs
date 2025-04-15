"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./index.module.css";

export const Loader = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to([leftRef.current, rightRef.current], {
            duration: 1,
            width: "0%",
            ease: "power2.inOut",
            delay: 0.5,
        });
    }, []);

    return (
        <div className={styles.loader}>
            <div ref={leftRef} className={styles.left} />
            <div ref={rightRef} className={styles.right} />
        </div>
    );
};
