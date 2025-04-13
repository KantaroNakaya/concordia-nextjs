import type { Metadata } from "next";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsList } from "@/app/_libs/microcms";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = await getNewsDetail(params.slug);
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

export default async function Page({ params }: Props) {
    const data = await getNewsDetail(params.slug);
    if (!data) {
        notFound();
    }

    return (
        <>
            <Article data={data} />
            <div className={styles.buttonList}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
                <ButtonLink href="/">＜＜トップへ戻る</ButtonLink>
            </div>
        </>
    );
}
