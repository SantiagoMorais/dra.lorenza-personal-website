import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { BlogBanner } from "./blogBanner"
import { ArticleList } from "./articleList"
import { articles } from "articles"
import { SectionEmpty } from "./sectionEmpty"

export const BlogSection = () => {
    return (
        <Container data-testid="blogSection">
            <Header />
            <BlogBanner />
            {articles.length > 0
                ? <ArticleList />
                : <SectionEmpty />
            }
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