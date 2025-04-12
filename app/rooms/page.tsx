import Image from "next/image";
import styles from "./page.module.css";
import {roomData} from "@/app/_constants/roomData";

export default function Page() {
    return (
        <div className={styles.container}>
            {roomData.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません。</p>
            ) : (
                <ul>
                    {roomData.map((room) => (
                        <li key={room.id} className={styles.roomList}>
                            <Image
                                src={room.image.url}
                                alt=""
                                width={room.image.width}
                                height={room.image.height}
                                className={styles.image}
                            />
                            <p className={styles.name}>{room.name}</p>
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
                                        <th className={styles.size}>収容可能</th>
                                        <td>{room.capacity}名</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.amenities}>
                                            アメニティ
                                        </th>
                                        <td>{room.amenities.join(", ")}</td>
                                    </tr>
                                    <tr>
                                        <th className={styles.desc}>詳細</th>
                                        <td>{room.desc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
