import Link from "next/link";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faInstagram,
    faFacebookF,
    faAirbnb,
} from "@fortawesome/free-brands-svg-icons";

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
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className={styles.icon_brands}
                                aria-label="X（旧Twitter）ロゴ"
                                size="3x"
                            />
                        </a>
                        <a className={styles.icon_link}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className={styles.icon_brands}
                                aria-label="instagramロゴ"
                                size="3x"
                            />
                        </a>
                        <a className={styles.icon_link}>
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                className={styles.icon_brands}
                                aria-label="facebookロゴ"
                                size="3x"
                            />
                        </a>
                    </div>
                    <p className={styles.footer_box_text}>
                        CONCORDIAの情報は各SNSでも見られます。
                    </p>
                </div>
                <div className={`${styles.footer_box} ${styles.reserveBox}`}>
                    <h2 className={styles.footer_box_title}>RESERVE</h2>
                    <a className={styles.icon_link}>
                        <FontAwesomeIcon
                            icon={faAirbnb}
                            className={styles.icon_brands}
                            aria-label="airbnbロゴ"
                            size="3x"
                        />
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
