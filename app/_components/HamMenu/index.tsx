import styles from "./index.module.css";
import { useState } from "react";

export default function HamMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
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
                        <a href="/#" onClick={closeMenu}>
                            TOP
                        </a>
                    </li>
                    <li>
                        <a href="/news" onClick={closeMenu}>
                            NEWS
                        </a>
                    </li>
                    <li>
                        <a href="/access" onClick={closeMenu}>
                            ACCESS
                        </a>
                    </li>
                    <li>
                        <a href="/contact" onClick={closeMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
