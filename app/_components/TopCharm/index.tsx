import styles from "./index.module.css";
import Image from "next/image";

export default function TopCharm() {
    return (
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
    );
}   
