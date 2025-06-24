import Image from "next/image";
import styles from "./index.module.css";
import type { Room } from "@/app/_libs/microcms";

type Props = {
    rooms: Room[];
};

export default function RoomList({ rooms }: Props) {
    if (rooms.length === 0) {
        return <p>部屋情報はありません。</p>;
    }
    return (
        <div className={styles.container}>
            <ul className={styles.listWrapper}>
                {rooms.map((room) => (
                    <li key={room.id} className={styles.list}>
                        <div className={styles.listInner}>
                            <div className={styles.image}>
                                <Image
                                    src={room.image.url}
                                    alt=""
                                    width="320"
                                    height="180"
                                />
                            </div>
                            <p className={styles.name}>{room.name}</p>
                        </div>
                        <div className={styles.listInner}>
                            <table className={styles.infoTable}>
                                <tbody>
                                    <tr>
                                        <th className={styles.price}>価格</th>
                                        <td>
                                            {room.price.toLocaleString(
                                                "ja-JP",
                                                {
                                                    style: "currency",
                                                    currency: "JPY",
                                                }
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={styles.size}>面積</th>
                                        <td>{room.size}㎡</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.size}>
                                            収容可能
                                        </th>
                                        <td>{room.capacity}名</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.listDesc}>
                            <span>{room.desc}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
