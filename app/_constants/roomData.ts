export type RoomImage = {
    url: string;
    width: number;
    height: number;
};

export type Amenity =
    | "Wi-Fi"
    | "ミニバー"
    | "バスタブ"
    | "シャワー"
    | "テレビ"
    | "デスク";

export type RoomDataType = {
    id: string;
    image: RoomImage;
    name: string;
    price: number;
    capacity: number;
    size: number;
    desc: string;
    amenities: Amenity[];
};

export const roomData: RoomDataType[] = [
    {
        id: "1",
        image: {
            url: "/room1.jpg",
            width: 320,
            height: 180,
        },
        name: "デラックスツインルーム",
        price: 48000,
        capacity: 2,
        size: 40,
        desc: "広々としたツインベッドルーム。市街地の眺めが楽しめます。",
        amenities: ["Wi-Fi", "ミニバー", "バスタブ", "テレビ"],
    },
    {
        id: "2",
        image: {
            url: "/room2.jpg",
            width: 320,
            height: 180,
        },
        name: "スーペリアダブルルーム",
        price: 38000,
        capacity: 2,
        size: 35,
        desc: "快適なダブルベッドルーム。静かな環境でゆっくりとお過ごしいただけます。",
        amenities: ["Wi-Fi", "ミニバー", "シャワー", "テレビ"],
    },
    {
        id: "3",
        image: {
            url: "/room3.jpg",
            width: 320,
            height: 180,
        },
        name: "スタンダードシングルルーム",
        price: 28000,
        capacity: 1,
        size: 25,
        desc: "シンプルで機能的なシングルルーム。ビジネス利用にも最適です。",
        amenities: ["Wi-Fi", "デスク", "シャワー", "テレビ"],
    },
    {
        id: "4",
        image: {
            url: "/room4.jpg",
            width: 320,
            height: 180,
        },
        name: "エコノミーシングルルーム",
        price: 18000,
        capacity: 1,
        size: 20,
        desc: "コストパフォーマンスに優れたシングルルーム。必要な設備は全て完備しています。",
        amenities: ["Wi-Fi", "シャワー", "テレビ"],
    },
];
