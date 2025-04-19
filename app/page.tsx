import AnimatedSection from "@/app/_components/AnimatedSection";
import TopSection from "@/app/_components/TopSection";
import TopHero from "@/app/_components/TopHero";
import TopCharm from "@/app/_components/TopCharm";
import TopNews from "@/app/_components/TopNews";
import TopRoom from "@/app/_components/TopRoom";
export const revalidate = 60;

export default async function Home() {
    return (
        <>
            <TopSection>
                <AnimatedSection>
                    <TopHero />
                </AnimatedSection>
            </TopSection>
            <TopSection title="CHARM">
                <TopCharm />
            </TopSection>
            <TopSection title="NEWS">
                <TopNews />
            </TopSection>
            <TopSection title="ROOM">
                <TopRoom />
            </TopSection>
        </>
    );
}
