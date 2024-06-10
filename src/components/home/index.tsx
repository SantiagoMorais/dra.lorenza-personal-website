import { AboutMe } from "@components/aboutMe"
import { Hero } from "@components/hero"
import { NavBar } from "@components/navBar"
import { Treatments } from "@components/treatments"
import styled from "styled-components"

export const Home = () => {
    return (
        <Container>
            <NavBar />
            <Hero />
            <Treatments />
            <AboutMe />
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