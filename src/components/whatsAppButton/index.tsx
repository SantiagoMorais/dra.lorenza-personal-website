import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, style } from "@styles/style";
import { whatsAppLink } from "@utils/variables";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY;

      windowHeight + scrollPosition + 200 >= scrollHeight
        ? setShowButton(false)
        : setShowButton(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container $isVisible={showButton}>
      <a href={whatsAppLink} className="link" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        <p className="text">Fale conosco via WhatsApp</p>
      </a>
    </Container>
  );
};

const Container = styled.button<{ $isVisible: boolean }>`
  opacity: 0.6;
  background: #25d366;
  border: none;
  border-radius: 50rem;
  position: fixed;
  bottom: ${(props) => (props.$isVisible ? "2rem" : "-6rem")};
  right: 2rem;
  transition: 0.5s;
  z-index: 3;
  opacity: ${(props) => (props.$isVisible ? 0.6 : 0)};

  .link {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    align-items: center;

    .icon {
      color: ${style.textColor};
      font-size: ${fontSize.fontSizeMedium};
    }

    .text {
      color: ${style.textColor};
      font-size: ${fontSize.fontSizeSmall};
    }
  }

  &:hover {
    opacity: 1;
    filter: drop-shadow(0 0 1rem #25d366);
  }

  @media (max-width: 768px) {
    bottom: ${(props) => (props.$isVisible ? "2rem" : "-6rem")};
    border-radius: 50%;
    opacity: ${(props) => (props.$isVisible ? 0.6 : 0)};

    .link {
      padding: 0;
      width: 5rem;
      height: 5rem;
      display: flex;
      justify-content: center;

      .icon {
        font-size: ${fontSize.fontSizeLarge};
      }

      .text {
        display: none;
      }
    }
  }
`;
