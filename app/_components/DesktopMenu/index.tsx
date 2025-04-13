import styles from "./index.module.css";
import { useState } from "react";

export default function DesktopMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
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
        </>
    );
}
