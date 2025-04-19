import styles from "./index.module.css";

export default function TopHero() {
    return (
        <div className={styles.heroText}>
            <p className={styles.heroTitle}>便利と自然</p>
            <p className={styles.heroSubtitle}>相反する２つの概念が両立する</p>
            <p className={styles.heroDescription}>
                圧倒的なアクセスの良さによる
                <br />
                充実した時間を過ごしつつ
                <br />
                ひとまずホテルに戻ると
                <br />
                緑に囲まれ開放的な空間が味わえる
            </p>
            <p className={styles.heroMessage}>
                「忙しい人のための最高の休日を
                <br />
                あなたに授けたい」
            </p>
            <p className={styles.heroConclusion}>
                これが私たちCONCORDIAの願いです
            </p>
        </div>
    );
}
