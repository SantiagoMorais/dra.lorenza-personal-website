import { AboutMe } from "@components/homeSection/aboutMe"
import { Assessments } from "@components/homeSection/assessments"
import { Footer } from "@components/footer"
import { Hero } from "@components/homeSection/hero"
import { Header } from "@components/header"
import { Treatments } from "@components/homeSection/treatments"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { FAQs } from "./faqs"
import { CaringBeyondMethodology } from "./caringBeyondMethodology"
import { BlogAndResources } from "./blogAndResources"

export const Home = () => {
    return (
        <Container data-testid="home">
            <Header />
            <Hero />
            <AboutMe />
            <CaringBeyondMethodology />
            <Treatments />
            <Assessments />
            <BlogAndResources />
            <FAQs />
            <Footer />
            <WhatsAppButton />
        </Container>
    )
}

const Container = styled.section`
    min-height: 100dvh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`