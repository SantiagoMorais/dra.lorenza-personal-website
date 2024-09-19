import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, style } from "@styles/style";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <FontAwesomeIcon className="icon" icon={faSpinner} spin /> Carregando...
    </Container>
  );
};

const Container = styled.p`
  font-size: ${fontSize.fontSizeLarge};
  color: ${style.primaryColor};
  margin: auto;
  min-height: 100%;

  .icon {
    margin-right: 0.5rem;
  }
`;
