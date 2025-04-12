"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import cx from "classnames";
import styles from "./index.module.css";

export default function MainVisual() {
    const pathname = usePathname();
    const isTopPage = pathname === "/";

    return (
        <div>
            <div className={cx(styles.bg, { [styles.miniBg]: !isTopPage })}>
                <h1 className={styles.siteTitle}>
                    HOTEL
                    <br />
                    CONCORDIA
                    <br />
                    OSAKA
                </h1>
            </div>
        </div>
    );
}
