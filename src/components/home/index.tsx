import { AboutMe } from "@components/aboutMe"
import { Address } from "@components/address"
import { Assessments } from "@components/assessments"
import { Footer } from "@components/footer"
import { Hero } from "@components/hero"
import { NavBar } from "@components/navBar"
import { ScheduleAppointment } from "@components/scheduleAppointment"
import { Treatments } from "@components/treatments"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { FAQs } from "./faqs"

export const Home = () => {
    return (
        <Container>
            <NavBar />
            <Hero />
            <Treatments />
            <AboutMe />
            <Assessments />
            <ScheduleAppointment />
            <Address />
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