import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { WhatsAppButton } from "@components/whatsAppButton"
import styled from "styled-components"
import { BlogBanner } from "./blogBanner"
import { ArticleList } from "./articleList"
import { SectionEmpty } from "./sectionEmpty"
import { articles, emptyList } from "@json/articles.json"

export const BlogSection = () => {
    const articlesList = emptyList;
    
    return (
        <Container data-testid="blogSection">
            <Header />
            <BlogBanner />
            {articlesList.length > 0
                ? <ArticleList articles={articlesList}/>
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