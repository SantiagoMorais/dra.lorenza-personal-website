import styled from "styled-components";
import { Header } from "../header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@components/footer";
import { fontSize, style } from "@styles/style";
import { Link } from "react-router-dom";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const ContentNotFound = () => {
  return (
    <Container>
      <Header />
      <div className="contentPage">
        <FontAwesomeIcon className="icon" icon={faFaceFrown} />
        <h3 className="warningTitle">ERRO 404 - Página não encontrada</h3>
        <p className="warningText">
          Essa página não existe. Confira novamente o caminho da sua URL ou, por
          favor, entre em contato conosco caso considere que isso seja um erro.
        </p>
        <Link to={"/"} className="returnButton">
          <FontAwesomeIcon icon={faRotateLeft} className="returnIcon" />
          Retorne para a página inicial
        </Link>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  .contentPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    .warningTitle {
      color: ${style.primaryColor};
      font-size: ${fontSize.fontSizeLarge};
      text-align: center;
    }

    .warningText {
      color: ${style.secondaryTextColor};
      font-size: ${fontSize.fontSizeMedium};
      text-align: center;
      margin-bottom: 1rem;
    }

    .icon {
      width: 30dvw;
      height: 30dvw;
      max-width: 30rem;
      color: ${style.primaryColor};
      opacity: 50%;
    }

    .returnButton {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-size: ${fontSize.fontSizeMedium};
      color: ${style.primaryColor};
      transition: 0.3s;

      &:hover {
        color: ${style.tertiaryColor};
        scale: 1.1;
      }

      &:hover > .returnIcon {
        transform: rotate(-360deg);
      }

      .returnIcon {
        transition:
          scale 0.3s,
          transform 0.5s;
      }
    }
  }

  @media (max-width: 420px) {
    .contentPage {
      .warningTitle {
        font-size: ${fontSize.fontSizeMedium};
      }

      .warningText {
        font-size: ${fontSize.fontSizeBase};
      }

      .icon {
        width: 50dvw;
        height: 50dvw;
      }
    }
  }
`;
