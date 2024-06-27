import { AboutMe } from "@components/home/aboutMe"
import { Assessments } from "@components/home/assessments"
import { Footer } from "@components/footer"
import { Hero } from "@components/home/hero"
import { NavBar } from "@components/navBar"
import { Treatments } from "@components/home/treatments"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { FAQs } from "./faqs"
import { CaringBeyondMethodology } from "./caringBeyondMethodology"

export const Home = () => {
    return (
        <Container>
            <NavBar />
            <Hero />
            <AboutMe />
            <CaringBeyondMethodology />
            <Treatments />
            <Assessments />
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