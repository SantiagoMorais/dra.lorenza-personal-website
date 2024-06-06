import { NavBar } from "@components/navBar"
import styled from "styled-components"

export const Home = () => {
    return (
        <Container>
                <NavBar />
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