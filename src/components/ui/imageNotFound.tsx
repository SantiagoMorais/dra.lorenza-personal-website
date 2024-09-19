import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontStyle, style } from "@styles/style";
import styled from "styled-components";

interface IImageNotFound {
  articleList: boolean;
}

export const ImageNotFound: React.FC<IImageNotFound> = ({ articleList }) => {
  return (
    <Container $articleList={articleList}>
      <p id="imageNotFoundTitle">Imagem não encontrada</p>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
    </Container>
  );
};

const Container = styled.div<{ $articleList: boolean }>`
  float: right;
  height: 50dvh;
  min-height: 30rem;
  max-height: 50rem;
  width: 50%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${style.textColor};
  gap: 1rem;
  ${({ $articleList }) =>
    $articleList
      ? `
        width: 100%;
        border-bottom: 0.2rem solid ${style.tertiaryColor};`
      : `
        border: 0.2rem solid ${style.primaryColor};
        border-radius: 0.5rem;
        margin: 0rem 0rem 1rem 2rem;`}

  .icon {
    font-size: ${fontSize.fontSizeMedium};
    color: ${style.primaryColor};
  }

  #imageNotFoundTitle {
    font-size: ${fontSize.fontSizeMedium};
    font-weight: ${fontStyle.mediumWeight};
    color: ${style.secondaryTextColor};
    position: static;
    text-align: center;
    padding: 0;
    margin: 0;
    text-indent: 0;
  }
`;
