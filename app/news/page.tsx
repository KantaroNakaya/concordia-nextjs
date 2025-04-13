import styles from "./page.module.css";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import PageTitle from "@/app/_components/PageTitle";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
    const { contents: newsItems, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });
    return (
        <>
            <PageTitle>NEWS</PageTitle>
            <NewsList news={newsItems} />
            <Pagination totalCount={totalCount} current={1} />
            <div className={styles.button}>
                <ButtonLink href="/">＜＜トップへ戻る</ButtonLink>
            </div>
        </>
    );
}
