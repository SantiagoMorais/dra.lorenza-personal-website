import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { WhatsAppButton } from "@components/whatsAppButton";
import styled from "styled-components";
import { BlogBanner } from "./blogBanner";
import { ArticleList } from "./articleList";
import { SectionEmpty } from "./sectionEmpty";
import { useQuery } from "@apollo/client";
import { GET_POSTS_QUERY } from "@utils/blogApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fontSize, style } from "@styles/style";
import { ErrorComponent } from "./errorComponent";
import { IPostsData } from "@utils/interfaces";
import { Loading } from "./loading";

export const BlogSection = () => {
  const { loading, error, data } = useQuery<IPostsData>(GET_POSTS_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      first: 2,
    },
  });

  return (
    <Container data-testid="blogSection">
      <Header />
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : data && data.postsConnection.edges.length > 0 ? (
        <ArticleList edges={data?.postsConnection.edges} />
      ) : (
        <SectionEmpty />
      )}
      <Footer />
      <WhatsAppButton />
    </Container>
  );
};

const Container = styled.section`
  min-height: 100dvh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
