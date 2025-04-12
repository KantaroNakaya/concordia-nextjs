import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";
import PageTitle from "../_components/PageTitle";

export default function Page() {
    return (
        <div>
            <PageTitle>CONTACT</PageTitle>
            <ContactForm />
        </div>
    );
}
