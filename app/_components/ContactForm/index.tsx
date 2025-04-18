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
        <form
            className={styles.form}
            action={formAction}
            onSubmit={handleSubmit}
        >
            <div className={styles.formItemName}>
                <div className={styles.formItem}>
                    <label className={styles.formItemLabel} htmlFor="lastname">
                        <span className={styles.formItemLabelText}>姓</span>
                        <span className={styles.formItemLabelRequired}>
                            必須
                        </span>
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        required
                        className={styles.formItemInput}
                        placeholder="例）山田"
                    />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.formItemLabel} htmlFor="firstname">
                        <span className={styles.formItemLabelText}>名</span>
                        <span className={styles.formItemLabelRequired}>
                            必須
                        </span>
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                        className={styles.formItemInput}
                        placeholder="例）太郎"
                    />
                </div>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formItemLabel} htmlFor="email">
                    <span className={styles.formItemLabelText}>
                        メールアドレス
                    </span>
                    <span className={styles.formItemLabelRequired}>必須</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.formItemInput}
                    placeholder="例）example@gmail.com"
                />
            </div>
            <div className={styles.formItem}>
                <label className={styles.formItemLabel} htmlFor="phone">
                    <span className={styles.formItemLabelText}>電話番号</span>
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={styles.formItemInput}
                    placeholder="例）00000000000"
                />
            </div>
            <div className={styles.formItem}>
                <label
                    className={styles.formItemLabel}
                    htmlFor="message"
                >
                    <span className={styles.formItemLabelText}>
                        お問い合わせ内容
                    </span>
                    <span className={styles.formItemLabelRequired}>必須</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className={styles.formItemTextarea}
                ></textarea>
            </div>
            <div className={styles.actions}>
                {state.status === "error" && (
                    <p className={styles.error}>{state.message}</p>
                )}
                <input
                    type="submit"
                    className={styles.formBtn}
                    value="送信する"
                />
            </div>
        </form>
    );
}
