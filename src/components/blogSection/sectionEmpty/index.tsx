import { fontSize, style } from "@styles/style";
import styled from "styled-components";
import image from "@assets/imgs/emptySectionImage/emptySectionImage.png";

export const SectionEmpty = () => {
  return (
    <Container data-testid="sectionEmpty">
      <h3 className="warningTitle">Novidades em breve</h3>
      <p className="warningText">
        Teremos novas publicações em breve com mais conteúdos sobre nutrologia
        para você!
      </p>
      <img className="image" src={image} alt="Sessão liberada em breve" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

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

  .image {
    width: 100%;
    max-width: 60rem;
    height: auto;
    border-radius: 1rem;
    border: 0.5rem solid ${style.primaryColor};
    box-shadow: 1rem 1rem 1rem ${style.tertiaryColor};
  }

  @media (max-width: 420px) {
    .warningTitle {
      font-size: ${fontSize.fontSizeMedium};
    }

    .warningText {
      font-size: ${fontSize.fontSizeBase};
    }

    .image {
      border-width: 0.2rem;
      box-shadow: 0.5rem 0.5rem 0.5rem ${style.tertiaryColor};
    }
  }
`;
