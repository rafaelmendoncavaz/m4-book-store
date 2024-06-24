import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { TitleSection } from "../../components/TitleSection/TitleSection"
import { BookSection } from "../../components/BookSection/BookSection"

export function Home() {

    return(
        <>
            <DefaultTemplate>
                <TitleSection />
                <BookSection />
            </DefaultTemplate>
        </>
    )
}