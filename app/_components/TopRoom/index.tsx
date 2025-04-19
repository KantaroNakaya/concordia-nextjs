import styles from "./index.module.css";
import ImageSwiper from "@/app/_components/ImageSwiper";
import ButtonLink from "@/app/_components/ButtonLink";
import { roomImages } from "@/app/_constants/images";

export default function TopRoom() {
    return (
        <div>
            <div className={styles.wrapper}>
                <ImageSwiper images={roomImages} />
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
