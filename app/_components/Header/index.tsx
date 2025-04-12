"use client";

import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.menuBox}>
            <div className={styles.menuLogo}>
                <a href="/">CONCORDIA</a>
            </div>
            <nav className={styles.pcMenu}>
                <ul>
                    <li>
                        <a href="/">TOP</a>
                    </li>
                    <li>
                        <a href="/news">NEWS</a>
                    </li>
                    <li>
                        <a href="/rooms">ROOMS</a>
                    </li>
                    <li>
                        <a href="/access">ACCESS</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <div
                className={`${styles.openbtn} ${
                    isMenuOpen ? styles.active : ""
                }`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav
                id="g-nav"
                className={`${styles.hamNav} ${
                    isMenuOpen ? styles.panelactive : ""
                }`}
            >
                <ul>
                    <li>
                        <a href="#" onClick={closeMenu}>
                            TOP
                        </a>
                    </li>
                    <li>
                        <a href="news/" onClick={closeMenu}>
                            NEWS
                        </a>
                    </li>
                    <li>
                        <a href="access/" onClick={closeMenu}>
                            ACCESS
                        </a>
                    </li>
                    <li>
                        <a href="contact/" onClick={closeMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
