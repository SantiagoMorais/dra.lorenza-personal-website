import { Button } from "@components/button"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { whatsAppLink } from "@styles/variables"
import styled from "styled-components"
import horizontalLogo from "@assets/imgs/horizontalLogo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons"
import { fontSize, fontStyle, style } from "@styles/style"

export const Footer = () => {
    return (
        <Container theme={style}>
            <div className="contact">
                <p className="text">
                    Agende sua consulta comigo diretamente pelo WhatsApp
                </p>
                <Button href={whatsAppLink} icon={faWhatsapp} content="Falar no whatsapp" />
            </div>
            <div className="content">
                <div className="imageContainer">
                    <img src={horizontalLogo} alt="logo" className="logo" />
                </div>
                <div className="info">
                    <p className="about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla ipsam adipisci magnam harum eos hic reiciendis. Rem nobis nisi ab architecto possimus blanditiis, asperiores laudantium suscipit itaque iusto. Libero!
                    </p>
                    <div className="social">
                        <p className="follow">Entre em contato pelas minhas redes:</p>
                        <ul className="socialList">
                            <li className="listItem">
                                <button className="button">
                                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                                </button>
                            </li>
                            <li className="listItem">
                                <button className="button">
                                    <FontAwesomeIcon icon={faPhone} className="icon" />
                                </button>
                            </li>
                            <li className="listItem">
                                <button className="button">
                                    <FontAwesomeIcon icon={faAt} className="icon" />
                                </button>
                            </li>
                            <li className="listItem">
                                <button className="button">
                                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navigation">
                    <a href="#home" className="section">
                        Home
                    </a>
                    <a href="#address" className="section">
                        Como chegar
                    </a>
                    <a href="#contact" className="section">
                        Contatos
                    </a>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100dvw;
        background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.tertiaryColor} 100%);
        align-items: center;
        gap: .5rem 2rem;
        padding: .5rem;

        .text {
            color: ${({ theme }) => theme.textColor};
            font-size: ${fontSize.fontSizeSmall};
            min-width: fit-content;
            font-weight: ${fontStyle.mediumWeight};
        }
    }

    .content {
        display: flex;
        padding: 2rem;
        gap: 2rem;
        align-items: center;

        .imageContainer {
            flex: 1;

            .logo {
                width: 100%;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            flex: 1;

            .about {
                max-width: 50rem;
                font-size: ${fontSize.fontSizeSmall};
                text-align: justify;
            }

            .social {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                align-items: center;

                .follow {
                    font-size: ${fontSize.fontSizeBase};
                    font-weight: ${fontStyle.mediumWeight};
                }

                .socialList {
                    display: flex;
                    gap: 2rem;
                    
                    .listItem {
                        .button {
                            padding: .5rem;
                            background: none;
                            border: none;
                            cursor: pointer;
                            
                            &:hover > .icon {
                                scale: 1.1;
                                opacity: 1;
                                filter: drop-shadow(0 0 1rem ${({theme}) => theme.primaryColor});
                                }
                                
                            .icon {
                                transition: .3s;
                                font-size: ${fontSize.fontSizeLarge};
                                color: ${({theme}) => theme.primaryColor};
                                opacity: .8;
                            }
                        }
                    }
                }
            }
        }

        .navigation {
            flex: .5;
            display: flex;
            flex-direction: column;
            align-self: baseline;
            align-items: end;
            gap: .5rem;

            .section {
                min-width: fit-content;
                font-size: ${fontSize.fontSizeBase};
                font-weight: ${fontStyle.boldWeight};
                transition: .3s;
                position: relative;

                &:hover {
                    color: ${({theme}) => theme.primaryColor};
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: .1rem;
                    background: ${({ theme }) => theme.primaryColor};
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform .5s;
                }
            
                &:hover::after {
                    transform: scaleX(1);
                }
            
                &:not(:hover)::after {
                    transform: scaleX(0);
                    transform-origin: right;
                }
            }
        }
    }

    @media (max-width: 768px) { 
        .content {
            flex-direction: column;
    
            .imageContainer {
                width: 90%;
            }
    
            .navigation {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 2rem;
    
                .section {
                    padding: 0 0 .2rem;
                }
            }
        }
    }
`