import "./destyle.css";
import "./global.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MainVisual from "./_components/MainVisual";

export const metadata: Metadata = {
    metadataBase: new URL("https://localhost:3000"),
    title: {
        template: "%s | HOTEL CONCORDIA OSAKA",
        default: "HOTEL CONCORDIA OSAKA",
    },
    description:
        "本サイトは架空のホテルのデモサイトです。デモサイトのため、noindexにしています。",
    openGraph: {
        title: `%s | HOTEL CONCORDIA OSAKA`,
        description:
            "本サイトは架空のホテルのデモサイトです。デモサイトのため、noindexにしています。",
        images: ["/ogp.jpg"],
    },
    alternates: {
        canonical: `http://localhost:3000`,
    },
    robots: {
        index: false,
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
