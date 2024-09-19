import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { fontSize, fontStyle, style } from "@styles/style";
import { WhatsAppButton } from "@components/whatsAppButton";
import { useQuery } from "@apollo/client";
import { GET_POSTS_QUERY, IPostsData } from "@utils/blogApi";
import parse from "html-react-parser";
import { ArticleHeader } from "./articleHeader";
import { ContentNotFound } from "@components/contentNotFound";

export const Article = () => {
  const { data } = useQuery<IPostsData>(GET_POSTS_QUERY);
  const { id } = useParams();
  const currentPost = data?.posts.find((post) => post.id === id);

  return (
    <>
      {currentPost !== undefined ? (
        <>
          <Header />
          <Container>
            <div className="content">
              <ArticleHeader data={currentPost} />
              <div className="postContent">
                <img
                  src={currentPost?.imagem.url}
                  alt={`Imagem do artigo "${currentPost?.titulo}"`}
                  className="postImage"
                />
                {currentPost?.texto.html && parse(currentPost?.texto.html)}

                {currentPost?.videoUrl && (
                  <div className="video">{parse(currentPost?.videoUrl)}</div>
                )}
              </div>
            </div>
          </Container>
          <Footer />
          <WhatsAppButton />
        </>
      ) : (
        <ContentNotFound />
      )}
    </>
  );
};

const Container = styled.section`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  .content {
    width: 100%;
    max-width: 144rem;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;

    .postContent {
      .postImage {
        float: left;
        height: 50dvh;
        min-height: 30rem;
        max-height: 50rem;
        object-fit: cover;
        border-radius: 0.5rem;
        border: 0.2rem solid ${style.primaryColor};
        width: 50%;
        max-width: 50rem;
        margin: 0rem 2rem 1rem 0rem;
      }

      h2,
      h3,
      h4 {
        color: ${style.primaryColor};
        font-size: ${fontSize.fontSizeMedium};
        font-weight: ${fontStyle.mediumWeight};
        display: inline-block;
        position: relative;
        margin-bottom: 1rem;
        overflow-wrap: normal;

        &::after {
          content: "";
          position: absolute;
          bottom: -0.1rem;
          left: 0;
          width: 110%;
          height: 0.1rem;
          background: linear-gradient(
            to right,
            ${style.primaryColor} 80%,
            transparent 100%
          );
        }
      }

      p {
        font-weight: ${fontStyle.lightWeight};
        font-size: ${fontSize.fontSizeBase};
        margin-bottom: 2rem;
        text-indent: 5rem;
        text-align: justify;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .video {
        width: 100%;
        display: flex;
        justify-content: center;

        iframe {
          border-radius: 1rem;
          width: 60dvw;
          max-width: 80rem;
          height: calc(60dvw * 9 / 16);
          max-height: calc(80rem * 9 / 16);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      .postContent {
        .postImage {
          float: none;
          height: auto;
          min-height: auto;
          max-height: 50rem;
          width: 100%;
          max-width: 100%;
          margin: 0rem 0rem 1rem;
        }

        .video {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            max-width: none;
          }
        }
      }
    }
  }
`;
