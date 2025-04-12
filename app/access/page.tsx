import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";

export default async function Page() {
    const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
    return (
        <div>
            <PageTitle>ACCESS</PageTitle>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8779708219404!2d135.49767441080053!3d34.73347018134167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e4396c12ce49%3A0x3bd7c4e0bf1076cf!2z5paw5aSn6Ziq6aeF!5e0!3m2!1sja!2sjp!4v1743936081166!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    loading="lazy"
                ></iframe>
            </div>
            <div className={styles.root}>
                <p>
                    〒532-○○○○
                    <br />
                    大阪府大阪市淀川区西中島〇丁目〇〇−〇
                    <br />
                    <br />
                    (JR新大阪駅から徒歩10分)
                </p>
                <p>
                    JR新大阪駅の西出口を出てセブン〇〇ブンがある交差点を右折。200メートルほど進むと、〇〇病院があります。そこで左折すると「HOTEL
                    CONCORDIA OSAKA」の入り口に辿り着くことができます。
                </p>
            </div>
        </div>
    );
}
