import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontStyle, style } from "@styles/style";
import { IPostsData } from "@utils/blogApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleList: React.FC<IPostsData> = ({ posts }) => {
  const [postsPerPage, setPostsPerPage] = useState<number>(10);

  const disableButton: boolean = postsPerPage >= posts?.length ? true : false;

  const handleLoadMorePosts = () => {
    setPostsPerPage((prev) => Math.min(prev + 10, posts.length));
  };

  return (
    <>
      <List data-testid="articleList">
        {posts.slice(0, postsPerPage).map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.id}`}
            className="articleContainer"
            data-testid="articleItem"
          >
            <div className="imageContainer">
              <img
                src={article.imagem.url}
                alt="Imagem do artigo"
                className="articleImage"
              />
            </div>
            <div className="content">
              <div className="link">
                <h2 className="title">{article.titulo}</h2>
              </div>
              {article.subtitulo && (
                <h3 className="subtitle">{article.subtitulo}</h3>
              )}
              <p className="link">Ler publicação</p>
            </div>
            <h4 className="author">Dra. Lorenza Arruda</h4>
          </Link>
        ))}
      </List>
      <LoadMoreButton
        onClick={handleLoadMorePosts}
        disabled={postsPerPage >= posts.length}
        $disableButton={disableButton}
      >
        <FontAwesomeIcon icon={faAdd} />
        Carregar mais
      </LoadMoreButton>
    </>
  );
};

const List = styled.ul`
  width: 100%;
  max-width: 144rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(25rem, 1fr));
  padding: 2rem;
  gap: 2rem;

  .articleContainer {
    flex: 1;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 0.2rem solid ${style.tertiaryColor};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: 0.3s;

    .articleImage {
      width: 100%;
      height: 30rem;
      object-fit: cover;
      object-position: center;
      border-bottom: 0.1rem solid ${style.tertiaryColor};
    }

    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;

      .title {
        font-size: ${fontSize.fontSizeBase};
        text-transform: uppercase;
        color: ${style.primaryColor};
      }

      .subtitle {
        font-size: ${fontSize.fontSizeSmall};
        margin-bottom: 1rem;
        cursor: pointer;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      .link {
        font-size: ${fontSize.fontSizeSmall};
        color: ${style.tertiaryColor};
        font-weight: ${fontStyle.boldWeight};
        text-transform: uppercase;
        transition: opacity 0.3s;
        display: inline-block;
      }
    }

    .author {
      padding: 1rem 0rem;
      margin: auto 1rem 0;
      border-top: 0.1rem solid ${style.tertiaryColor};
      font-size: ${fontSize.fontSizeSmall};
      opacity: 0.6;
      cursor: pointer;
    }

    &:hover {
      background-color: ${style.secondaryColor};
      opacity: 0.8;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(25rem, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0rem, 1fr);
  }
`;

const LoadMoreButton = styled.button<{ $disableButton: boolean }>`
  display: flex;
  padding: 0.5rem 2rem;
  align-items: center;
  gap: 1rem;
  font-size: ${fontSize.fontSizeBase};
  border-radius: 50rem;
  margin: 0 2rem 2rem;
  border: none;
  color: ${style.textColor};
  cursor: ${(props) => (props.$disableButton ? "default" : "pointer")};
  opacity: ${(props) => (props.$disableButton ? ".6" : "1")};
  background-color: ${(props) =>
    props.$disableButton ? "rgb(145, 102, 102)" : style.primaryColor};
  transition: 0.3s;
  user-select: none;

  //chatgpt, como faço para que a lógica abaixo funcione no styled-components?
  ${(props) =>
    props.$disableButton === false &&
    `
        &:hover {
            opacity: .8;
            scale: 1.15;
        }`}
`;
