import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import ImageSwiper from "./_components/ImageSwiper";
import { roomImages, morningImages } from "./_constants/images";

export const revalidate = 60;

export default async function Home() {
    const name = "nakaya";
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });

    return (
        <>
            <section className={styles.topSection}>
                <h2 className={styles.topSectionTitle}>CHARM</h2>
                <div className={styles.charmBox}>
                    <div className={styles.charm}>
                        <Image
                            src="/room/room06.jpg"
                            alt="hotel-photo"
                            loading="lazy"
                            width={500}
                            height={281}
                            className={styles.charmImage}
                        />
                        <p className={styles.charmText}>
                            HOTEL CONCORDIA
                            OSAKAは「新大阪駅まで徒歩10分」という立地にありながら、壮大な開放感の中でゆっくりとした時間を過ごすことができます。
                        </p>
                    </div>
                    <div className={styles.charm}>
                        <Image
                            src="/morning/dessert.jpg"
                            alt="morning-photo"
                            loading="lazy"
                            width={500}
                            height={281}
                            className={styles.charmImage}
                        />
                        <p className={styles.charmText}>
                            当ホテルのモーニングは高い品質の食材を使ったバイキングコースとなっております。沢山のお客様からご好評を頂いており、多数のメディアからも取り上げられています。
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.topSection}>
                <h2 className={styles.topSectionTitle}>NEWS</h2>
                <div className={styles.newsList}>
                    <NewsList showContent={false} />
                </div>
                <div className={styles.button}>
                    <ButtonLink href="/news">もっと見る</ButtonLink>
                </div>
            </section>
            <section className={styles.topSection}>
                <h2 className={styles.topSectionTitle}>ROOM</h2>
                <div className={styles.photoBox}>
                    <ImageSwiper images={roomImages} />
                    <p className={styles.photoBox_text}>
                        部屋は日差しの入る間取りとなっており、大阪中心地に居ながら自然な気持ちで快適に過ごすことができます。
                    </p>
                </div>
            </section>
            <section className={styles.topSection}>
                <h2 className={styles.topSectionTitle}>MORNING</h2>
                <div className={styles.photoBox}>
                    <ImageSwiper images={morningImages} />
                    <p className={styles.photoBox_text}>
                        CONCORDIAのモーニングではパンとフルーツが特に人気です。パンに関しては一流の職人と最先端の機械が協業することで「一級品のパン」を提供させていただいております。
                    </p>
                </div>
            </section>
        </>
    );
}
