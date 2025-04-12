import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
    return (
        <div>
            <div className={styles.footer_top}>
                <div
                    className={`${styles.footer_box} ${styles.snsBox}`}
                    id="sns"
                >
                    <h2 className={styles.footer_box_title}>SNS</h2>
                    <div className={styles.snsLink_list}>
                        <a className={styles.icon_link}>
                            <i
                                className={`${styles.icon_twitter} ${styles.icon_brands} fa-brands fa-3x fa-twitter`}
                                aria-label="twitterロゴ"
                            ></i>
                        </a>
                        <a className={styles.icon_link}>
                            <i
                                className={`${styles.icon_instagram} ${styles.icon_brands} fa-brands fa-3x fa-instagram`}
                                aria-label="instagramロゴ"
                            ></i>
                        </a>
                        <a className={styles.icon_link}>
                            <i
                                className={`${styles.icon_facebook} ${styles.icon_brands} fa-brands fa-3x fa-facebook-f`}
                                aria-label="facebookロゴ"
                            ></i>
                        </a>
                    </div>
                    <p className={styles.footer_box_text}>
                        CONCORDIAの情報は各SNSでも見られます。
                    </p>
                </div>
                <div className={`${styles.footer_box} ${styles.reserveBox}`}>
                    <h2 className={styles.footer_box_title}>RESERVE</h2>
                    <a className={styles.icon_link}>
                        <i
                            className={`${styles.icon_airbnb} ${styles.icon_brands} fa-brands fa-3x fa-airbnb`}
                            aria-label="airbnbロゴ"
                        ></i>
                    </a>
                    <p className={styles.footer_box_text}>
                        当ホテルの予約はairbnbで行われております。
                    </p>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.footerLogo}>
                    <a href="#">CONCORDIA</a>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright© HOTEL CONCORDIA OSAKA.</p>
                </div>
            </div>
        </div>
    );
}
