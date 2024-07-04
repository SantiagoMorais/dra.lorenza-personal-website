import styled from "styled-components"
import blogImage from "@assets/imgs/blogSection/blogSectionImage.jpg"
import blogImagePNG from "@assets/imgs/blogSection/blogSectionImageWithoutBG.png"
import { fontStyle, style } from "@styles/style"

export const BlogBanner = () => {
    return (
        <Container>
            <div className="content">
                <div className="info">
                    <h2 className="title">Blog de Nutrologia: Saúde e Ciência</h2>
                    <h3 className="subtitle">Informações precisas para otimizar sua alimentação e seu bem-estar</h3>
                </div>
                <div className="imageContainer">
                    <img className="banner" src={blogImage} alt="Banner do blog" />
                    <img className="bannerPNG" src={blogImagePNG} alt="Banner do blog" />
                </div>
            </div>
            <span className="lineBase"></span>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: calc(25dvw + 1rem);
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, ${style.secondaryColor},  ${style.textColor});
    position: relative;
    overflow: hidden;
    user-select: none;

    .content {
        width: 80%;
        height: 100%;
        display: flex;

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;

            .title {
                font-size: 3.2dvw;
                text-align: end;
                font-weight: ${fontStyle.boldWeight};
                color: ${style.primaryColor};
            }
            
            .subtitle {
                font-size: 1.8dvw;
                text-align: end;
                font-weight: ${fontStyle.mediumWeight};
                color: ${style.primaryColor};
                opacity: .7;
                filter: drop-shadow(0 0 .5rem ${style.textColor});
            }
        }
        
        .imageContainer {
            flex: 1;
            height: 100%;
            overflow: hidden;
            position: relative;
            scale: 1.25;
            
            .banner {
                width: 100%;
                height: 100%;
                object-position: center top;
                object-fit: cover;
                mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
            }

            .bannerPNG {
                width: 100%;
                height: 100%;
                object-position: center top;
                object-fit: cover;
                position: absolute;
                z-index: 1;
                left: 0;
                top: 0;
                filter: drop-shadow(0 0 .5rem ${style.primaryColor});
            }
        }
    }

    .lineBase {
        width: 100%;
        height: 1rem;
        position: absolute;
        background: linear-gradient(to right, ${style.primaryColor}, ${style.tertiaryColor});
        bottom: 0;
    }

    @media (max-width: 768px) {
        height: 90dvw;
        display: flex;

        .content {
            width: 100%;
            padding: 0 2dvw;
    
            .info {
                flex: auto;
                justify-content: flex-start;
                position: relative;

                .title {
                    font-size: 5dvw;
                    text-align: left;
                    position: absolute;
                    width: 45dvw;
                    top: 5dvw;
                    left: 3dvw;
                    line-height: 1.1;
                }
                
                .subtitle {
                    font-size: 4dvw;
                    text-align: left;
                    position: absolute;
                    width: 45dvw;
                    top: 23dvw;
                    left: 3dvw;
                }
            }
            
            .imageContainer {
                height: 100%;
                flex: auto;
                overflow: hidden;
                position: relative;
                scale: 1;
                transform: translateX(20dvw);
                
                .banner {
                    height: 120%;
                    object-position: top;
                    object-fit: cover;
                    mask-image: linear-gradient(to right, transparent, black 50%);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 50%);
                }
    
                .bannerPNG {
                    height: 120%;
                    object-position: top;
                }
            }
        }
    }
`