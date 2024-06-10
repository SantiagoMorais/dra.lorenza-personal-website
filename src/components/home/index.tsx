import { AboutMe } from "@components/aboutMe"
import { Assessments } from "@components/assessments"
import { Hero } from "@components/hero"
// import { NavBar } from "@components/navBar"
import { NavBarSecondOption } from "@components/navBarSecondOption"
import { ScheduleAppointment } from "@components/scheduleAppointment"
import { Treatments } from "@components/treatments"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"

export const Home = () => {
    return (
        <Container>
            <NavBarSecondOption />
            <Hero />
            <Treatments />
            <AboutMe />
            <Assessments />
            <ScheduleAppointment />
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