"use client";

import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";
import DesktopMenu from "@/app/_components/DesktopMenu";
import HamMenu from "@/app/_components/HamMenu";

export default function Header() {

    return (
        <div className={styles.menuBox}>
            <div className={styles.menuLogo}>
                <a href="/">CONCORDIA</a>
            </div>
            <DesktopMenu />
            <HamMenu />
        </div>
    );
}
