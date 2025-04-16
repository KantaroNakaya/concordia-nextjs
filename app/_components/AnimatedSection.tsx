"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
    const { ref, inView } = useInView({
        rootMargin: "-50px",
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
