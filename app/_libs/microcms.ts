import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Room = {
    id: string;
    image: MicroCMSImage;
    name: string;
    price: number;
    capacity: number;
    size: number;
    desc: string;
} & MicroCMSListContent;

export type News = {
    title: string;
    content: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getRoomsList = async (queries?: MicroCMSQueries) => {
    const roomData = await client.getList<Room>({
        endpoint: "rooms",
        queries,
    });
    return roomData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const newsData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return newsData;
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: "news",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};
