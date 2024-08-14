import { fontSize, style } from "@styles/style"
import styled from "styled-components"
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ErrorComponent = () => {
    return (
        <Container>
            <FontAwesomeIcon className="icon" icon={faFaceFrown} />
            <h3 className="warningTitle">ERRO 404 - Publicações não encontradas</h3>
            <p className="warningText">Por algum motivo não foi possível encontrar os dados das publicações. Por favor, tente mais tarde ou entre em contato conosco.</p>
        </Container>
    )
}

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

    .icon {
        width: 30dvw;
        height: 30dvw;
        max-width: 30rem;
        color: ${style.primaryColor};
        opacity: 50%;
    }

    @media (max-width: 420px) {
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
`