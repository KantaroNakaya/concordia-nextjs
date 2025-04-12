"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";
import { sendGTMEvent } from "@next/third-parties/google";

const initialState = {
    status: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction] = useFormState(createContactData, initialState);
    console.log(state);

    const handleSubmit = () => {
        sendGTMEvent({
            event: "contact",
            value: "submit",
        });
    };

    if (state.status === "success") {
        return (
            <p className={styles.success}>
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }
    return (
        <div className={styles.form}>
            <div className={styles.formItem}>
                <p className={styles.formItemLabel}>
                    <span className={styles.formItemLabelRequired}>必須</span>
                    お名前
                </p>
                <input
                    type="text"
                    className={styles.formItemInput}
                    placeholder="例）山田太郎"
                />
            </div>
            <div className={styles.formItem}>
                <p className={styles.formItemLabel}>
                    <span className={styles.formItemLabelRequired}>必須</span>
                    電話番号
                </p>
                <input
                    type="text"
                    className={styles.formItemInput}
                    placeholder="例）000-0000-0000"
                />
            </div>
            <div className={styles.formItem}>
                <p className={styles.formItemLabel}>
                    <span className={styles.formItemLabelRequired}>必須</span>
                    メールアドレス
                </p>
                <input
                    type="email"
                    className={styles.formItemInput}
                    placeholder="例）example@gmail.com"
                />
            </div>
            <div className={styles.formItem}>
                <p className={styles.formItemLabel + " " + styles.isMsg}>
                    <span className={styles.formItemLabelRequired}>必須</span>
                    お問い合わせ内容
                </p>
                <textarea className={styles.formItemTextarea}></textarea>
            </div>
            <div className={styles.demoNote}>
                <p className={styles.demoNoteText}>
                    本サイトはデモサイトのため、
                    <br className="pc" />
                    実際に問い合わせを送信することはできません。
                    <br className="pc" />
                    ご了承ください。
                </p>
            </div>
            <input type="submit" className={styles.formBtn} value="送信する" />
        </div>
    );
}
