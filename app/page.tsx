import styles from "@/app/page.module.css";
import Image from "next/image";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import ImageSwiper from "@/app/_components/ImageSwiper";
import AnimatedSection from "@/app/_components/AnimatedSection";
import { roomImages, morningImages } from "@/app/_constants/images";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import { getNewsList } from "./_libs/microcms";

export const revalidate = 60;

export default async function Home() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    return (
        <>
            <section className={styles.topSection}>
                <AnimatedSection>
                    <div className={styles.heroText}>
                        <p className={styles.heroTitle}>便利と自然</p>
                        <p className={styles.heroSubtitle}>
                            相反する２つの概念が両立する
                        </p>
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
                </AnimatedSection>
            </section>
            <section className={styles.topSection}>
                <AnimatedSection>
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
                </AnimatedSection>
            </section>
            <section className={styles.topSection}>
                <AnimatedSection>
                    <h2 className={styles.topSectionTitle}>NEWS</h2>
                    <div className={styles.newsList}>
                        <NewsList news={data.contents} showContent={false} />
                    </div>
                    <div className={styles.button}>
                        <ButtonLink href="/news">
                            他のニュース記事も見る＞＞
                        </ButtonLink>
                    </div>
                </AnimatedSection>
            </section>
            <section className={styles.topSection}>
                <AnimatedSection>
                    <h2 className={styles.topSectionTitle}>ROOM</h2>
                    <div className={styles.photoBox}>
                        <ImageSwiper images={roomImages} />
                        <p className={styles.photoBox_text}>
                            部屋は日差しの入る間取りとなっており、大阪中心地に居ながら自然な気持ちで快適に過ごすことができます。
                        </p>
                    </div>
                    <div className={styles.button}>
                        <ButtonLink href="/rooms">
                            部屋紹介を見る＞＞
                        </ButtonLink>
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
}
