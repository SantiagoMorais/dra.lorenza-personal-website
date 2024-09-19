import articlesAuthor from "@assets/imgs/blogSection/article's-author.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IPost } from "@utils/blogApi";
import styled from "styled-components";
import { fontSize, fontStyle, style } from "@styles/style";
import React from "react";

interface IArticleHeader {
  data: IPost | undefined;
}

export const ArticleHeader: React.FC<IArticleHeader> = ({ data }) => {
  return (
    <Container>
      {data && (
        <>
          <Link to="/blog" className="returnButton">
            <FontAwesomeIcon icon={faRotateLeft} className="icon" />
            Retornar ao blog
          </Link>
          <div className="author">
            <img
              src={articlesAuthor}
              alt="Foto do(a) autor(a) do artigo"
              className="profilePhoto"
            />
            <div className="about">
              <h3 className="name">Por: {data?.autor.nome}</h3>
              <p className="text">{data?.autor.descricao}</p>
              <div className="medicalRegistry">
                {data?.autor.crm && (
                  <p className="registry">CRM: {data?.autor.crm}</p>
                )}
                {data?.autor.rqe && (
                  <p className="registry">RQE: {data?.autor.rqe}</p>
                )}
              </div>
            </div>
          </div>
          <h2 className="articleTitle">{data?.titulo}</h2>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .returnButton {
    align-self: flex-end;
    padding: 1rem 0 0;
    font-size: ${fontSize.fontSizeSmall};
    text-transform: uppercase;
    transition: color 0.5s;
    position: relative;
    color: ${style.secondaryTextColor};

    &::after {
      content: "";
      bottom: 0;
      left: 0;
      height: 0.1rem;
      width: 100%;
      background: ${style.primaryColor};
      display: block;
      transform: scaleX(0);
      transition: transform 0.5s;
      transform-origin: left;
      color: ${style.secondaryTextColor};
    }

    &:hover::after {
      transform: scaleX(1);
    }

    &:not(:hover)::after {
      transform-origin: right;
    }

    &:hover {
      opacity: 0.8;
      color: ${style.primaryColor};
    }

    &:hover > .icon {
      rotate: -360deg;
    }

    .icon {
      margin-right: 0.5rem;
      transition: 0.5s;
    }
  }

  .author {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;

    .profilePhoto {
      max-width: 15rem;
      width: 100%;
      max-height: 15rem;
      object-fit: cover;
      border-radius: 50%;
    }

    .about {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .name {
        font-size: ${fontSize.fontSizeSmall};
      }

      .text {
        font-size: ${fontSize.fontSizeSmall};
        font-size: calc(${fontSize.fontSizeSmall} - 20%);
      }

      .medicalRegistry {
        display: flex;

        .registry {
          font-size: calc(${fontSize.fontSizeSmall} - 20%);
          font-weight: ${fontStyle.mediumWeight};

          &:not(:last-child)::after {
            content: "-";
            margin: 0 0.5rem;
          }
        }
      }
    }
  }

  .articleTitle {
    color: ${style.primaryColor};
    font-size: ${fontSize.fontSizeLarge};
    font-weight: ${fontStyle.boldWeight};
    margin-bottom: 3rem;
    width: 100%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.2rem;
      left: 0;
      height: 0.2rem;
      width: 100%;
      background: linear-gradient(
        to right,
        ${style.primaryColor} 60%,
        transparent
      );
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    .author {
      flex-direction: column;

      .profilePhoto {
        max-width: 50dvw;
        max-height: 50dvw;
      }

      .about {
        .name {
          text-align: center;
        }

        .text {
          text-align: justify;
        }

        .medicalRegistry {
          justify-content: center;
        }
      }
    }

    .articleTitle {
      font-size: ${fontSize.fontSizeMedium};
      margin-bottom: 2rem;
    }
  }
`;
