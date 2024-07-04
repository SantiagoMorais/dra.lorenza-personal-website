import { Button } from "@components/button"
import { IconDefinition, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { emailLink, instagramLink, whatsAppLink } from "@styles/variables"
import styled from "styled-components"
import horizontalLogo from "@assets/imgs/homeAndNavBar/horizontalLogo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons"
import { fontSize, fontStyle, style } from "@styles/style"
import data from "@json/data.json"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { NavBarContext } from "@contexts/navBarContext"

interface ILinks {
    icon: IconDefinition,
    link: string
}

export const Footer = () => {
    const { currentLink, setCurrentLink } = useContext(NavBarContext);

    const handlePageChange = (link: string) => {
        setCurrentLink(link);
    }

    const links: ILinks[] = [
        { icon: faInstagram, link: instagramLink },
        { icon: faPhone, link: whatsAppLink },
        { icon: faAt, link: emailLink },
        { icon: faWhatsapp, link: whatsAppLink },
    ];

    return (
        <Container >
            <div className="contact">
                <p className="text">
                    Agende sua consulta comigo diretamente pelo WhatsApp
                </p>
                <Button href={whatsAppLink} icon={faWhatsapp} content="Falar no WhatsApp" buttonColor="#25D366" />
            </div>
            <div className="content">
                <div className="imageContainer">
                    <img src={horizontalLogo} alt="logo" className="logo" />
                </div>
                <div className="info">
                    <p className="about">
                    A Dra. Lorenza Arruda é uma médica nutróloga dedicada a oferecer um atendimento de qualidade, individualizado e com empatia. Ela se empenha em entender as necessidades dos pacientes, abordando cada caso de forma holística. Dra. Lorenza busca tratar, educar e capacitar seus pacientes, proporcionando uma experiência médica única, com confiança, conforto e excelência.
                    </p>
                    <div className="social">
                        <p className="follow">Entre em contato pelas minhas redes:</p>
                        <ul className="socialList">
                            {links.map((item, index) =>
                                <li className="listItem" key={index}>
                                    <a href={item.link} className="button">
                                        <FontAwesomeIcon icon={item.icon} className="icon" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="navigation">
                    {data.links.map(item =>
                        <div key={item.name} className="link">
                            <Link className={`section ${currentLink === item.name && "pageSelected"}`} to={item.link} onClick={() => handlePageChange(item.name)}>
                                {item.name}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;

    .contact {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100dvw;
        background: linear-gradient(90deg, ${style.primaryColor} 0%, ${style.tertiaryColor} 100%);
        align-items: center;
        gap: .5rem 2rem;
        padding: .5rem;

        .text {
            color: ${style.textColor};
            font-size: ${fontSize.fontSizeSmall};
            min-width: fit-content;
            font-weight: ${fontStyle.mediumWeight};
            text-align: center;
        }
    }

    .content { 
        display: flex;
        padding: 2rem 2rem 3rem;
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
                max-width: 50rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
                align-items: center;

                .follow {
                    font-size: ${fontSize.fontSizeBase};
                    font-weight: ${fontStyle.mediumWeight};
                    text-align: center;
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
                                filter: drop-shadow(0 0 1rem ${style.primaryColor});
                                }
                                
                            .icon {
                                transition: .3s;
                                font-size: ${fontSize.fontSizeLarge};
                                color: ${style.primaryColor};
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

            .link {
                position: relative;

                .section {
                    min-width: fit-content;
                    font-size: ${fontSize.fontSizeBase};
                    font-weight: ${fontStyle.boldWeight};
                    transition: .3s;
                    text-transform: capitalize;
                    
                    &.pageSelected::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: .1rem;
                        background: ${style.secondaryTextColor};
                        transform: scaleX(1);
                        transform-origin: left;
                        transition: transform .5s;
                    }
                }

                &:hover {
                    color: ${style.primaryColor};
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: .1rem;
                    background: ${style.primaryColor};
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