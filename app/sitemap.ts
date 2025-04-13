import { MetadataRoute } from "next";
import { getNewsList } from "./_libs/microcms";
import { getCategoryList } from "./_libs/microcms";

const buildurl = (path: string) => {
    return `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }${path}`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { contents: newsContents } = await getNewsList();
    const { contents: categoryContents } = await getCategoryList();

    const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
        url: buildurl(`/news/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
        (content) => ({
            url: buildurl(`/news/category/${content.id}`),
            lastModified: content.revisedAt,
        })
    );

    const now = new Date();

    return [
        {
            url: buildurl(""),
            lastModified: now,
        },
        {
            url: buildurl("/members"),
            lastModified: now,
        },
        {
            url: buildurl("/contact"),
            lastModified: now,
        },
        {
            url: buildurl("/news"),
            lastModified: now,
        },
        ...newsUrls,
        ...categoryUrls,
    ];
}
