import { Footer } from "@components/footer"
import { Header } from "@components/navBar"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { Address } from "./address"
import { ScheduleAppointment } from "@components/contactSection/scheduleAppointment"

export const ContactSection = () => {
    return (
        <Container>
            <Header />
            <ScheduleAppointment />
            <Address />
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