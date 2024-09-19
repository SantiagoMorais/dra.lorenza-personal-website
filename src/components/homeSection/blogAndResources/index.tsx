import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontStyle, style } from "@styles/style";
import styled from "styled-components";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { instagramLink } from "@utils/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import lorenzaPNG from "@assets/imgs/blogAndSourcesImages/blogImagePng.png";
import blogSectionImage from "@assets/imgs/blogAndSourcesImages/blogComputerPNG.png";
import instagramImage from "@assets/imgs/blogAndSourcesImages/instagramPosts.png";
import textureImage from "@assets/imgs/homeAndNavBar/heroImage.jpg";

export const BlogAndResources = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <Container>
      <div className="content">
        <img src={textureImage} alt="Image de fundo" className="textureImage" />
        <div className="lineEffect top"></div>

        <img
          src={instagramImage}
          alt="blog Dra. Lorenza"
          className="backgroundImage instagram"
        />

        <div className="info instagram">
          <h2 className="title">
            Explore ainda mais conteúdos sobre nutrologia!
          </h2>
          <h3 className="subtitle instagram">Me siga no instagram!</h3>
          <button className="button">
            <FontAwesomeIcon icon={faInstagram} />
            <a href={instagramLink} target="blank">
              Instagram
            </a>
          </button>
        </div>

        <div className="imageContainer">
          <img
            src={lorenzaPNG}
            alt="blog Dra. Lorenza"
            className="lorenzaImage"
          />
        </div>

        <div className="info">
          <h2 className="title">Dicas e Artigos</h2>
          <h3 className="subtitle">
            Acesse nosso blog para dicas de saúde, receitas e mais.
          </h3>
          <button className="button" onClick={() => scrollToTop()}>
            <FontAwesomeIcon icon={faComputer} />
            <Link to="/blog">Leia nosso blog</Link>
          </button>
        </div>

        <img
          src={blogSectionImage}
          alt="blog Dra. Lorenza"
          className="backgroundImage blog"
        />

        <div className="lineEffect bottom"></div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${style.textColor};
  user-select: none;

  .content {
    display: flex;
    width: 100%;
    padding: 0 2dvh;
    gap: 2dvw;
    position: relative;
    align-items: center;
    overflow: hidden;

    .textureImage {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0.15;
      left: 0;
      top: 0;
    }

    .imageContainer {
      z-index: 2;
      filter: drop-shadow(0 0 0.5rem ${style.primaryColor});

      .lorenzaImage {
        width: 25dvw;
        height: auto;
        transform: translateY(2rem);
        object-fit: cover;
        mask-image: linear-gradient(to left, transparent, black 10%, black 90%);
        -webkit-mask-image: linear-gradient(
          to left,
          transparent,
          black 10%,
          black 90%
        );
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 2;

      .title {
        font-size: 2.6dvw;
        color: ${style.primaryColor};
        font-weight: ${fontStyle.boldWeight};
        filter: drop-shadow(0 0 0.2rem ${style.textColor});
      }

      .subtitle {
        font-size: 2dvw;
        color: ${style.secondaryTextColor};
        font-weight: ${fontStyle.mediumWeight};
        filter: drop-shadow(0 0 0.2rem ${style.textColor});
      }

      &.instagram {
        text-align: right;
        align-items: end;
      }

      .button {
        background-color: ${style.primaryColor};
        color: ${style.textColor};
        padding: 0.25rem 1.5rem;
        width: fit-content;
        border: none;
        border-radius: 50rem;
        font-size: 2dvw;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        transition:
          scale 0.3s,
          opacity 0.3s;
        cursor: pointer;
        filter: drop-shadow(0 0 0.5rem ${style.textColor});

        &:hover {
          scale: 1.15;
          opacity: 0.8;
        }
      }
    }

    .backgroundImage {
      position: absolute;
      height: 30rem;
      z-index: 0;
      opacity: 0.2;

      &.instagram {
        left: 3dvw;
        rotate: -15deg;
        height: 150%;
      }

      &.blog {
        right: -4dvw;
        height: 90%;
        rotate: 10deg;
        bottom: -2dvh;
        top: 0;
        margin: auto 0;
      }
    }

    .lineEffect {
      position: absolute;
      left: 0;
      height: 0.2rem;
      background: ${style.primaryColor};
      width: 100%;
      opacity: 0.6;
      z-index: 1;

      &.top {
        top: 1.25dvw;
      }

      &.bottom {
        bottom: 1.25dvh;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      padding: 2rem 0;
      gap: 0rem;

      .imageContainer {
        order: 1;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        overflow: hidden;

        .lorenzaImage {
          width: 70%;
          transform: none;
        }
      }

      .info {
        order: 2;
        text-align: center;
        align-items: center;
        gap: 1rem;
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0),
          rgba(255, 255, 255, 0.8),
          rgba(0, 0, 0, 0)
        );
        padding: 1rem 2rem;
        width: 100%;

        .title {
          font-size: ${fontSize.fontSizeMedium};
          text-align: center;

          color: ${style.primaryColor};
        }

        .subtitle {
          font-size: ${fontSize.fontSizeBase};
          text-align: center;
          filter: none;
        }

        .button {
          filter: none;
          font-size: ${fontSize.fontSizeBase};
        }

        &.instagram {
          text-align: center;
          align-items: center;
          margin-bottom: 1rem;
        }
      }

      .backgroundImage {
        height: 100%;
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        &.instagram {
          left: auto;
          rotate: -10deg;
          height: 100%;
          width: auto;
          object-position: center center;
          object-fit: contain;
        }

        &.blog {
          display: none;
        }
      }

      .lineEffect {
        display: none;
      }
    }
  }
`;
