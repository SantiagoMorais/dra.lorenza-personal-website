import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize, style } from "@styles/style"
import styled from "styled-components"

interface IButton {
    content: string,
    icon: IconDefinition,
    href: string
}

export const Button: React.FC<IButton> = ({ content, icon, href }) => {
    return (
        <ButtonContainer theme={style}>
            <a href={href} className="link" target="_blank">
                <FontAwesomeIcon
                    data-testid="icon"
                    icon={icon}
                    className="icon" />
                {content}
            </a>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    display: flex;
    border:none;
    max-width: 20rem;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textColor};
    text-transform: capitalize;
    font-size: ${fontSize.fontSizeBase};
    cursor: pointer;
    padding: .25rem 1rem;
    border-radius: 50px;
    transition: .3s;
    background-color: ${({ theme }) => theme.primaryColor};
    min-width: fit-content;
    word-break: break-all;

    &:hover {
        opacity: .9;
        scale: 1.15;
    }

    .link {
        .icon {
            margin-right: .5rem;
        }
    }
` 