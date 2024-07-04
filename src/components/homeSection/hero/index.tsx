import styled from "styled-components"
import heroImage from "@assets/imgs/homeAndNavBar/heroImage.jpg"
import heroImageMobile from "@assets/imgs/homeAndNavBar/heroImageMobile.jpg"
import heroImageWithoutBG from "@assets/imgs/homeAndNavBar/heroImageWithoutBg.png"
import { fontSize, fontStyle, style } from "@styles/style"
import { Button } from "@components/button"
import { whatsAppLink } from "@styles/variables"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const Hero = () => {
    return (
        <Container >
            <div className="content">
                <img src={heroImage} alt="Imagem principal" className="heroImage" />
                <img src={heroImageWithoutBG} className="heroImageWithoutBG" />
                <img src={heroImageMobile} alt="Imagem principal" className="heroImageMobile" />
                <div className="slogan">
                    <h1 className="title">Uma Jornada para <br />uma Vida Plena</h1>
                    <h2 className="subtitle">Bases Integradas para Saúde, Bem-Estar e Equilíbrio</h2>
                </div>
                <span className="lineStyle"></span>
            </div>
            <div className="contactMe">
                <p className="message">Marque sua consulta diretamente pelo WhatsApp</p>
                <Button href={whatsAppLink} icon={faWhatsapp} content="Agende a sua consulta" buttonColor="#25D366" />
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    .content {
        align-self: center;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        background-color: black;

        .heroImage {
            width: 100%;
            object-fit: cover;
            opacity: .6;
        }

        .heroImageWithoutBG {
            position: absolute;
            z-index: 2;
            height: 100%;
            scale: 2.2;
            transform: translate(-50%, 25%);
            right: 0;
        }

        .heroImageMobile {
            display: none;
            max-height: 70rem;
            width: 100%;
            object-fit: cover;
            object-position: center top;
        }

        .slogan {
            position: absolute;
            max-width: 50dvw;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            left: 10dvw;
            
            .title {
                font-size: 3.8dvw;
                line-height: 1;
                font-weight: ${fontStyle.boldWeight};
                color: ${style.primaryColor};
                text-transform: uppercase;
                margin-bottom: 2%;
            }

            .subtitle {
                font-size: 2.8dvw;
                font-weight: ${fontStyle.mediumWeight};
                color: ${style.tertiaryColor};
            }
        }
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0dvw;
            bottom: 0;
            width: 100dvw;
            background: linear-gradient(to left, rgba(237, 221, 214, 0) 0%, rgb(237, 221, 214) 70%);
            pointer-events: none;
        }

        .lineStyle {
            height: .2rem;
            width: 100%;
            background: linear-gradient(to left, ${style.tertiaryColor}, rgba(255, 255, 255, 0));
            position: absolute;
            z-index: 1;
            bottom: 8%;
        }
    }

    .contactMe {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem 2rem;
        padding: 1rem;
        background: linear-gradient(to right, ${style.primaryColor}, ${style.tertiaryColor});
        flex-wrap: wrap;

        .message {
            color: ${style.textColor};
            font-size: ${fontSize.fontSizeMedium};
            font-weight: ${fontStyle.mediumWeight};
            text-align: center;
            min-width: 20rem;
        }
    }

    @media (max-width: 768px) {
        .content {
            .heroImage, .heroImageWithoutBG {
                display: none;
            }

            .heroImageMobile {
                display: block;
            }

            .slogan {
                max-width: 100dvw;
                width: 100%;
                z-index: 1;
                top: auto;
                bottom: 2rem;
                transform: none;
                left: 0;
                padding: 0 2rem;
                
                .title {
                    text-align: center;
                    line-height: 1;
                    font-size: ${fontSize.fontSizeLarge};
                    margin-bottom: 2%;
                }
    
                .subtitle {
                    font-size: ${fontSize.fontSizeMedium};
                    font-weight: ${fontStyle.boldWeight};
                    text-align: center;
                }
            }

            .lineStyle {
                bottom: 0;
            }

            &::after {
                top: auto;
                left: 0;
                bottom: 0;
                height: 20rem;
                width: 100%;
                background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0)) 100%;
                pointer-events: none;
            }
        }

        .contactMe {
            padding: .5rem;

            .message {
                font-size: ${fontSize.fontSizeBase};
            }
        }
    }

    @media(max-width: 420px) {
        .content {
            .slogan {
                .title {
                    font-size: ${fontSize.fontSizeMedium};
                }
            }
        }
    }
`