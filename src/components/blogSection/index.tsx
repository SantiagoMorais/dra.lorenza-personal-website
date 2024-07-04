import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { BlogBanner } from "./blogBanner"

export const BlogSection = () => {
    return (
        <Container>
            <Header />
            <BlogBanner />
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