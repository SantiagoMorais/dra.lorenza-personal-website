import styled from "styled-components"
import heroImage from "@assets/imgs/heroImage.jpg"
import heroImageMobile from "@assets/imgs/heroImageMobile.jpg"
import heroImageWithoutBG from "@assets/imgs/heroImageWithouBG.png"
import { fontSize, fontStyle, style } from "@styles/style"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@components/button"

export const Hero = () => {
    return (
        <Container theme={style}>
            <div className="content">
                <img src={heroImage} alt="Imagem principal" className="heroImage" />
                <img src={heroImageWithoutBG} className="heroImageWithoutBG" />
                <img src={heroImageMobile} alt="Imagem principal" className="heroImageMobile" />
                <div className="slogan">
                    <h1 className="title">Alcance seu Potencial Máximo:</h1>
                    <h2 className="subtitle">Transforme sua Vida com Orientação Nutrológica Personalizada, Ciência e Cuidado de Quem Entende de Saúde</h2>
                </div>
                <span className="lineStyle"></span>
            </div>
            <div className="contactMe">
                <p className="message">Marque sua consulta diretamente pelo WhatsApp</p>
                <Button href="" icon={faWhatsapp} content="Falar no Whatsapp" />
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

        .heroImage {
            width: 100%;
            object-fit: cover;
            object-position: 10dvw;
        }

        .heroImageWithoutBG {
            position: absolute;
            z-index: 2;
            width: 100%;
            object-position: 10dvw;
        }

        .heroImageMobile {
            display: none;
            height: 50rem;
            width: 100%;
            object-fit: cover;
            object-position: right;
        }

        .slogan {
            position: absolute;
            max-width: 50dvw;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            left: 10dvw;
            
            .title {
                font-size: 3.2dvw;
                line-height: 1;
                font-weight: ${fontStyle.boldWeight};
                color: ${({ theme }) => theme.primaryColor};
                text-transform: uppercase;
                margin-bottom: 2%;
            }

            .subtitle {
                font-size: 2dvw;
                font-weight: ${fontStyle.mediumWeight};
                color: ${({ theme }) => theme.tertiaryColor};
            }
        }
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 10dvw;
            bottom: 0;
            width: 60dvw;
            background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
            pointer-events: none;
        }

        .lineStyle {
            height: .2rem;
            width: 100%;
            background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            position: absolute;
            z-index: 1;
            bottom: 8%;
        }
    }

    .contactMe {
        width: 100%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem 2rem;
        padding: 1rem;
        background: linear-gradient(90deg, ${({theme}) => theme.primaryColor} 0%, ${({theme}) => theme.tertiaryColor} 50%, ${({theme}) => theme.primaryColor} 100%);
        flex-wrap: wrap;

        .message {
            color: ${({theme}) => theme.textColor};
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
                z-index: 1;
                top: auto;
                bottom: 2rem;
                transform: none;
                left: 0;
                padding: 0 2rem;
                
                .title {
                    font-size: ${fontSize.fontSizeMedium};
                    text-align: center;
                    line-height: 1;

                    margin-bottom: 2%;
                }
    
                .subtitle {
                    font-size: ${fontSize.fontSizeBase};
                    font-weight: ${fontStyle.boldWeight};
                    text-align: center;
                }
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

    @media (max-width: 480px) {
        .content {
            .heroImageMobile {
                object-position: -28rem;
            }
        }
    }
`