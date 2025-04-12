import Image from "next/image";
import type { NewsItem } from "@/app/_constants/newsData";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
    data: NewsItem;
};

export default function Article({ data }: Props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.meta}>
                <Date date={data.date} />
            </div>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
        </div>
    );
}
