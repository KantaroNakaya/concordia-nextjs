import styles from "./index.module.css";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";


export default async function TopNews() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    return (
        <div>   
            <div className={styles.wrapper}>
                <NewsList news={data.contents} showContent={false} />
            </div>
            <div className={styles.button}>
                <ButtonLink href="/news">他のニュース記事も見る＞＞</ButtonLink>
            </div>
        </div>
    );
}
