import Image from "next/image";
import styles from "./page.module.css";
import RoomList from "../_components/RoomList";
import PageTitle from "../_components/PageTitle";
import ButtonLink from "../_components/ButtonLink";
import { ROOMS_LIST_LIMIT } from "../_constants";
import { getRoomsList } from "../_libs/microcms";

export default async function Page() {
    const { contents: roomsItems, totalCount } = await getRoomsList({
        limit: ROOMS_LIST_LIMIT,
    });
    return (
        <>
            <PageTitle>NEWS</PageTitle>
            <RoomList rooms={roomsItems} />
            <div className={styles.button}>
                <ButtonLink href="/">＜＜トップへ戻る</ButtonLink>
            </div>
        </>
    );
}
