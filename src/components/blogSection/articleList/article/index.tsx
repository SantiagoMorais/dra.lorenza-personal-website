import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fontSize, fontStyle, style } from "@styles/style";
import { useQuery } from "@apollo/client";
import { GET_CURRENTLY_POST_QUERY } from "@utils/blogApi";
import { ICurrentlyPost } from "@utils/interfaces";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { WhatsAppButton } from "@components/whatsAppButton";
import { ContentNotFound } from "@components/contentNotFound";
import parse from "html-react-parser";
import { ArticleHeader } from "./articleHeader";
import { Loading } from "@components/ui/loading";
import { ErrorComponent } from "@components/blogSection/errorComponent";
import { ImageNotFound } from "@components/ui/imageNotFound";

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<ICurrentlyPost>(
    GET_CURRENTLY_POST_QUERY,
    {
      variables: { id },
    }
  );

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent />
        ) : data ? (
          <>
            <div className="content">
              <ArticleHeader data={data} />
              <div className="postContent">
                {data?.post.imagem ? (
                  <img
                    src={data?.post.imagem?.url}
                    alt={`Imagem do artigo "${data?.post.titulo}"`}
                    className="postImage"
                  />
                ) : (
                  <ImageNotFound />
                )}

                {data?.post.texto?.html && parse(data?.post.texto.html)}

                {data?.post.videoUrl && (
                  <div className="video">{parse(data?.post.videoUrl)}</div>
                )}
              </div>
            </div>
          </>
        ) : (
          <ContentNotFound />
        )}
      </Container>
      <Footer />
      <WhatsAppButton />
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
      .postImage,
      img {
        float: left;
        min-height: 30rem;
        object-fit: cover;
        border-radius: 0.5rem;
        width: 50%;
        max-width: 50rem;
        margin: 0rem 2rem 1rem 0rem;
      }

      .postImage {
        border: 0.2rem solid ${style.primaryColor};
        box-shadow: 0.5rem 0.5rem 1rem ${style.primaryColor};
        height: 50dvh;
        max-height: 50rem;
      }

      img {
        border: 0.2rem solid ${style.tertiaryColor};
        box-shadow: -0.5rem 0.75rem 1rem ${style.tertiaryColor};
        height: 40dvh;
        max-height: 40rem;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
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

        a {
          color: ${style.primaryColor};
          font-weight: ${fontStyle.mediumWeight};
          transition: 0.3s;

          &:hover {
            opacity: 0.8;
          }
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      blockquote {
        font-size: ${fontSize.fontSizeSmall};
        border-left: 0.2rem solid rgba(95, 18, 18, 0.342);
        display: inline-block;
        color: rgba(0, 0, 0, 0.7);
        font-weight: ${fontStyle.mediumWeight};
        margin: 1rem 0;
        background-color: ${style.secondaryColor};
        border-radius: 0 1rem 1rem 0;
        padding: .5rem 1rem;
      }

      img {
        width: 100%;
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

      video {
        display: block;
        border-radius: 1rem;
        padding: 2rem 0;
        width: 100%;
        height: calc(60dvw * 9 / 16);
        max-height: calc(80rem * 9 / 16);
      }

      ul,
      ol {
        li {
          font-size: ${fontSize.fontSizeBase};
          margin-left: 2rem;
          color: ${style.secondaryTextColor};

          &:last-child {
            margin-bottom: 1rem;
          }
        }
      }

      ul {
        li {
          list-style: disc;
        }
      }

      ol {
        li {
          list-style: decimal;
        }
      }

      table {
        width: 100%;
        
        thead {
          tr {
            th {
              background-color: ${style.primaryColor};
              border: .1rem solid rgba(0, 0, 0, 0.6);

              p {
                text-align: center;
                text-indent: 0;
              }
            }
          }
        }
        
        tbody {
          tr {
            td {
              border: .1rem solid rgba(0, 0, 0, 0.6);
              p {
                text-align: center;
                text-indent: 0;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      .postContent {
        .postImage,
        img {
          float: none;
          height: auto;
          min-height: auto;
          width: 100%;
          max-width: 100%;
          margin: 0rem 0rem 1rem;
        }

        .postImage {
          max-height: 50rem;
        }

        img {
          max-height: 40rem;
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
