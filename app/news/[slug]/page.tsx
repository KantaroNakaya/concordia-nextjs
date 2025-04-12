import type { Metadata } from "next";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { newsItems } from "@/app/_constants/newsData";
// import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const data = newsItems.find((item) => item.id === params.slug);
    if (!data) {
        return {
            title: "Not Found",
            description: "記事が見つかりませんでした",
        };
    }

    return {
        title: data.title,
        description: data.content.slice(0, 100),
    };
}

export default async function Page({ params, searchParams }: Props) {
    const data = newsItems.find((item) => item.id === params.slug);
    if (!data) {
        notFound();
    }

    return (
        <>
            <Article data={data} />
            <div className={styles.buttonList}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
                <ButtonLink href="/">トップへ戻る</ButtonLink>
            </div>
        </>
    );
}
