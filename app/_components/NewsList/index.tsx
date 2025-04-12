import styles from "./index.module.css";
import { newsItems } from "@/app/_constants/newsData";
import Link from "next/link";

interface NewsListProps {
    showContent?: boolean;
}

export default function NewsList({ showContent = false }: NewsListProps) {
    if (newsItems.length === 0) {
        return <p>お知らせはありません。</p>;
    }

    return (
        <div>
            <ul className={styles.listWrapper}>
                {newsItems.map((item) => (
                    <li
                        key={item.id}
                        className={`${styles.list} ${
                            showContent ? styles.listMargin : ""
                        }`}
                    >
                        <Link href={`/news/${item.id}`} className={styles.link}>
                            <dl className={styles.listInner}>
                                <dt className={styles.listDate}>
                                    <time>{item.date}</time>
                                </dt>
                                <dd className={styles.listTitle}>
                                    {item.title}
                                </dd>
                            </dl>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
