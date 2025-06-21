import "@/app/destyle.css";
import "@/app/global.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import MainVisual from "@/app/_components/MainVisual";
import { Loader } from "@/app/_components/Loader";

export const metadata: Metadata = {
    metadataBase: new URL("https://concordia-nextjs.vercel.app/"),
    title: {
        template: "%s | HOTEL CONCORDIA OSAKA",
        default: "HOTEL CONCORDIA OSAKA",
    },
    description:
        "本サイトは架空のホテルのデモサイトです。Next.jsとMicroCMSを使用しています。",
    openGraph: {
        title: `%s | HOTEL CONCORDIA OSAKA`,
        description:
            "本サイトは架空のホテルのデモサイトです。Next.jsとMicroCMSを使用しています。",
        images: ["/ogp.jpg"],
    },
    alternates: {
        canonical: `https://concordia-nextjs.vercel.app/`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>
                <Loader />
                <Header />
                <main className="mainbox">
                    <MainVisual />
                    <div className="childrenWrapper">{children}</div>
                </main>
                <Footer />
            </body>
            <GoogleTagManager gtmId="GTM-KQJ4KX4V" />
        </html>
    );
}
