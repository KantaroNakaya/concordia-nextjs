"use client";

import { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./index.module.css";
import DesktopMenu from "@/app/_components/DesktopMenu";
import HamMenu from "@/app/_components/HamMenu";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainVisual = document.querySelector("main > div:first-child");
            if (mainVisual) {
                const mainVisualBottom =
                    mainVisual.getBoundingClientRect().bottom;
                setIsScrolled(mainVisualBottom < 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cx(styles.menuBox, { [styles.scrolled]: isScrolled })}>
            <div className={styles.menuLogo}>
                <a href="/">CONCORDIA</a>
            </div>
            <DesktopMenu />
            <HamMenu />
        </div>
    );
}
