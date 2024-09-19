import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { WhatsAppButton } from "@components/whatsAppButton";
import styled from "styled-components";
import { BlogBanner } from "./blogBanner";
import { ArticleList } from "./articleList";
import { SectionEmpty } from "./sectionEmpty";
import { useQuery } from "@apollo/client";
import { GET_POSTS_QUERY } from "@utils/blogApi";
import { ErrorComponent } from "./errorComponent";
import { IPostsData } from "@utils/interfaces";
import { Loading } from "../ui/loading";
import { useState } from "react";
import { LoadMoreButton } from "./articleList/loadMoreButton";

export const BlogSection = () => {
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { loading, error, data, fetchMore } = useQuery<IPostsData>(
    GET_POSTS_QUERY,
    {
      fetchPolicy: "network-only",
      variables: {
        first: 10,
      },
    }
  );

  const loadMorePosts = () => {
    if (loading || !data) return;
    const endCursor: string = data.postsConnection.pageInfo.endCursor;

    setLoadingMore(true);

    fetchMore({
      variables: {
        after: endCursor,
        first: 5,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setLoadingMore(false);

        if (!fetchMoreResult) return prevResult;

        return {
          postsConnection: {
            ...fetchMoreResult.postsConnection,
            edges: [
              ...prevResult.postsConnection.edges,
              ...fetchMoreResult.postsConnection.edges,
            ],
          },
        };
      },
    });
  };

  return (
    <Container data-testid="blogSection">
      <Header />
      <BlogBanner />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : data && data.postsConnection.edges.length > 0 ? (
        <>
          <ArticleList edges={data?.postsConnection.edges} />
          <LoadMoreButton hasMoreData={data.postsConnection.pageInfo.hasNextPage} loadMore={loadMorePosts} loadingMore={loadingMore}/>
        </>
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
