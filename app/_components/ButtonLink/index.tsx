import styles from "./index.module.css";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: keyof typeof styles;
};

export default function ButtonLink({ href, children, className }: Props) {
    return (
        <a
            href={href}
            className={styles.button}
        >
            {children}
        </a>
    );
}
