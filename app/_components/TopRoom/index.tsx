import styles from "./index.module.css";
import ImageSwiper from "@/app/_components/ImageSwiper";
import ButtonLink from "@/app/_components/ButtonLink";
import { getRoomsList } from "@/app/_libs/microcms";
import { ROOMS_LIST_LIMIT } from "@/app/_constants";

export default async function TopRoom() {
    const { contents: roomsItems } = await getRoomsList({
        limit: ROOMS_LIST_LIMIT,
    });

    return (
        <div>
            <div className={styles.wrapper}>
                <ImageSwiper rooms={roomsItems} />
                <p className={styles.text}>
                    部屋は日差しの入る間取りとなっており、大阪中心地に居ながら自然な気持ちで快適に過ごすことができます。
                </p>
            </div>
            <div className={styles.button}>
                <ButtonLink href="/rooms">部屋紹介を見る＞＞</ButtonLink>
            </div>
        </div>
    );
}
