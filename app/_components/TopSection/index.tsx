import { ReactNode } from "react";
import styles from "./index.module.css";
import AnimatedSection from "../AnimatedSection";

interface TopSectionProps {
    title?: string;
    children: ReactNode;
}

export default function TopSection({ title, children }: TopSectionProps) {
    return (
        <section className={styles.section}>
            <AnimatedSection>
                {title && <h2 className={styles.title}>{title}</h2>}
                {children}
            </AnimatedSection>
        </section>
    );
}
