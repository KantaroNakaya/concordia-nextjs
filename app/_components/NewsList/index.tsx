import styles from "./index.module.css";
import Link from "next/link";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import type { News } from "@/app/_libs/microcms";
import { formatDate } from "@/app/_libs/utils";
import Date from "../Date";

type Props = {
    news: News[];
    showContent?: boolean;
};

export default function NewsList({ news, showContent }: Props) {
    if (news.length === 0) {
        return <p>お知らせはありません。</p>;
    }
    return (
        <div>
            <ul className={styles.listWrapper}>
                {news.map((item) => (
                    <li
                        key={item.id}
                        className={styles.list}
                    >
                        <Link href={`/news/${item.id}`} className={styles.link}>
                            <dl className={styles.listInner}>
                                <dt className={styles.listDate}>
                                    <Date
                                        date={
                                            item.publishedAt ?? item.createdAt
                                        }
                                    />
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
