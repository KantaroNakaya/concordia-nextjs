import Sheet from "@/app/_components/Sheet";
import ButtonLink from "@/app/_components/ButtonLink";

export const metadata = {
    title: "ニュース",
}

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({children}: Props){
    return(
        <>
            <Sheet>{children}</Sheet>
        </>
    );
}