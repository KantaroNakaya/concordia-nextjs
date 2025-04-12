import styles from "./index.module.css";

type Props = {
    children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
    return (
        <div>
            <h3 className={styles.PageTitle}>{children}</h3>
        </div>
    );
}
