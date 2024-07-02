import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize, style } from "@styles/style"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface IButton {
    content: string,
    icon: IconDefinition,
    href?: string,
    buttonColor?: string,
    linkPath?: string
}

interface ButtonContainerProps {
    $buttonColor?: string;
}

export const Button: React.FC<IButton> = ({ content, icon, href, buttonColor, linkPath }) => {
    return (
        <ButtonContainer $buttonColor={buttonColor}>
            {linkPath
                ? <Link to={linkPath} className="link">
                    <FontAwesomeIcon
                        data-testid="icon"
                        icon={icon}
                        className="icon" />
                    <span className="text">{content}</span>
                </Link>
                : <a href={href} className="link" target="_blank">
                    <FontAwesomeIcon
                        data-testid="icon"
                        icon={icon}
                        className="icon" />
                    <span className="text">{content}</span>
                </a>
            }

        </ButtonContainer>
    )
}

const ButtonContainer = styled.button<ButtonContainerProps>`
    display: flex;
    border:none;
    max-width: 20rem;
    align-items: center;
    justify-content: center;
    color: ${style.textColor};
    font-size: ${fontSize.fontSizeBase};
    cursor: pointer;
    padding: .25rem 1rem;
    border-radius: 50px;
    transition: .3s;
    background-color: ${({ $buttonColor }) => $buttonColor ? $buttonColor : style.primaryColor};
    min-width: fit-content;

    &:hover {
        opacity: .9;
        scale: 1.15;
    }

    .link {
        height: fit-content;
        display: flex;
        align-items: center;
        gap: .5rem;

        .text::first-letter {
            text-transform: uppercase;
        }
    }
` 