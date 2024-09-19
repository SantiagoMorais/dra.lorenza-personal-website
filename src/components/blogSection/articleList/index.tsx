import { ImageNotFound } from "@components/ui/imageNotFound";
import { fontSize, fontStyle, style } from "@styles/style";
import { IPostEdge } from "@utils/interfaces";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleList: React.FC<IPostEdge> = ({ edges }) => {
  return (
    <List data-testid="articleList">
      {edges?.map((article) => (
        <Link
          key={article.node.id}
          to={`/blog/${article.node.id}`}
          className="articleContainer"
          data-testid="articleItem"
        >
          <div className="imageContainer">
            {article?.node.imagem ? (
              <img
                src={article?.node.imagem?.url}
                alt="Imagem do artigo"
                className="articleImage"
              />
            ) : (
              <ImageNotFound articleList/>
            )}
          </div>
          <div className="content">
            <div className="link">
              <h2 className="title">{article.node.titulo}</h2>
            </div>
            {article.node.subtitulo && (
              <h3 className="subtitle">{article.node.subtitulo}</h3>
            )}
            <p className="link">Ler publicação</p>
          </div>
          <h4 className="author">Dra. Lorenza Arruda</h4>
        </Link>
      ))}
    </List>
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
