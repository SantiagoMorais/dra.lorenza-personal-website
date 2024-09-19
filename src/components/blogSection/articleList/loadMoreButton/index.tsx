import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontStyle, style } from "@styles/style";
import styled from "styled-components";

interface ILoadMoreButton {
  hasMoreData: boolean;
  loadMore: () => void;
  loadingMore: boolean
}

export const LoadMoreButton: React.FC<ILoadMoreButton> = ({
  hasMoreData,
  loadMore,
}) => {
  return (
    <Button $hasMoreData={hasMoreData} onClick={() => hasMoreData && loadMore} disabled={!hasMoreData}>
      <FontAwesomeIcon icon={faAdd} />
      <span className="buttonMessage">Carregar mais</span>
    </Button>
  );
};

const Button = styled.button<{ $hasMoreData: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: ${fontSize.fontSizeBase};
  color: ${style.secondaryColor};
  background-color: ${style.primaryColor};
  border: 0.2rem solid transparent;
  border-radius: 1rem;
  margin: 4rem 2rem;

  transition: 0.3s;

  .buttonMessage {
    text-align: center;
    font-weight: ${fontStyle.mediumWeight};
  }

  ${({ $hasMoreData }) =>
    $hasMoreData
      ? `
        cursor: pointer;
        
        &:hover {
            border-color: ${style.textColor};
            box-shadow: 0 0 1rem ${style.primaryColor};
            scale: 1.1;
            opacity: .8;
        }
    `
      : `
       cursor: default;
       opacity: .6;
       scale: .8; 
    `}
`;
