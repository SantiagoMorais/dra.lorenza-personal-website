import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { articles } from "@json/articles.json"
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { imageMapper } from "utils/imageMapper";
import { fontSize, fontStyle, style } from "@styles/style";
import { WhatsAppButton } from "@components/whatsAppButton";
import articlesAuthor from "@assets/imgs/blogSection/article's-author.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export const Article = () => {
    const { id } = useParams();    
    const currentArticle = articles[Number(id)];

    return (
        <>
            <Header />
            <Container>
                <div className="content">
                    <div className="articleHeader">
                        <Link to="/blog" className="returnButton">
                            <FontAwesomeIcon icon={faRotateLeft} className="icon" />
                            Retornar ao blog
                        </Link>
                        <div className="author">
                            <img src={articlesAuthor} alt="Foto da Dra. Lorenza Arruda - autora do artigo" className="profilePhoto" />
                            <div className="about">
                                <h3 className="name">Por: Dra. Lorenza</h3>
                                <p className="text">
                                    Médica Nutróloga especializada em Emagrecimento e Saúde Mental, Dra. Lorenza possui graduação em Medicina pela EMESCAM e residências em Clínica Médica e Nutrologia pelo IPSEMG. Com pós-graduações em Nutrologia pela USP e Fisiologia do Exercício pela UNIFESP, além de outras formações em áreas como Modulação Intestinal e Terapia pelo Instituto CIM.
                                </p>
                                <p className="text">
                                    Seu compromisso é ajudar os pacientes a alcançar uma vida saudável, focando em Emagrecimento e Saúde Mental, proporcionando cuidado integral e informações relevantes.
                                </p>
                                <p className="medicalRegistry"> CRM: 73400 - RQE: 54931</p>
                            </div>
                        </div>
                        <h2 className="articleTitle">
                            {currentArticle.title}
                            <span className="border"></span>
                        </h2>
                    </div>
                    <div className="articleContent">
                        <img
                            src={imageMapper[currentArticle.image]}
                            alt={`Imagem do artigo "${currentArticle.title}"`}
                            className="articleImage"
                        />
                        {currentArticle.article.map((a, index) => (
                            'paragraph' in a
                                ?
                                <p className="paragraph" key={index}>{a.paragraph}</p>
                                : 'topicTitle' in a
                                    ? 
                                    <p className="subtitle" key={index}>
                                        {a.topicTitle}
                                        <span className="border"></span>
                                    </p>
                                    : null
                        )
                        )}
                    </div>
                </div>
            </Container>
            <Footer />
            <WhatsAppButton />
        </>
    )
}

const Container = styled.section`
    min-height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    .content {
        width: 100%;
        max-width: 144rem;
        display: flex;
        flex-direction: column;
        padding: 0 2rem 2rem;

        .articleHeader {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .returnButton {
                align-self: flex-end;
                padding: 1rem 0 0;
                font-size: ${fontSize.fontSizeSmall};
                text-transform: uppercase;
                transition: color .5s;
                position: relative;
                color: ${style.secondaryTextColor};

                &::after {
                    content: "";
                    bottom: 0;
                    left: 0;
                    height: .1rem;
                    width: 100%;
                    background: ${style.primaryColor};
                    display: block;
                    transform: scaleX(0);
                    transition: transform .5s;
                    transform-origin: left;
                    color: ${style.secondaryTextColor};
                }
                
                &:hover::after {
                    transform: scaleX(1);
                }

                &:not(:hover)::after {
                    transform-origin: right;
                }

                &:hover {
                    opacity: .8;
                    color: ${style.primaryColor};
                }

                &:hover > .icon {
                    rotate: -360deg;
                }

                .icon {
                    margin-right: .5rem;
                    transition: .5s;
                }
            }

            .author {
                width: 90%;
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: 2rem 0;

                .profilePhoto {
                    max-width: 15rem;
                    width: 100%;
                    max-height: 15rem;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .about {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    .name {
                        font-size: ${fontSize.fontSizeSmall};
                    }
                    
                    .text {
                        font-size: ${fontSize.fontSizeSmall};
                        font-size: calc(${fontSize.fontSizeSmall} - 20%);
                    }
                    
                    .medicalRegistry {
                        font-size: calc(${fontSize.fontSizeSmall} - 20%);
                        font-weight: ${fontStyle.mediumWeight};
                    }
                }
            }

            .articleTitle {
                color: ${style.primaryColor};
                font-size: ${fontSize.fontSizeLarge};
                font-weight: ${fontStyle.boldWeight};
                margin-bottom: 3rem;
                width: 100%;
                
                .border {
                    height: .2rem;
                    width: 100%;
                    display: block;
                    background: linear-gradient(to right, ${style.primaryColor} 60%, transparent);
                }

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        .articleContent {
            .articleImage {
                float: left;
                height: 50dvh;
                min-height: 30rem;
                max-height: 50rem;
                object-fit: cover;
                border-radius: .5rem;
                border: .2rem solid ${style.primaryColor};
                width: 50%;
                max-width: 50rem;
                margin: 0rem 2rem 1rem 0rem;
            }
            
            .subtitle {
                color:  ${style.primaryColor};
                font-size: ${fontSize.fontSizeBase};
                font-weight: ${fontStyle.mediumWeight};
                width: fit-content;
                display: inline-block;
                
                .border {
                    display: block;
                    width: 200%;
                    margin-bottom: 1rem;
                    height: .1rem;
                    background: linear-gradient(to right, ${style.primaryColor} 80%, transparent 100%); 
                    max-width: 95dvw;
                }
                
                &:first-of-type {
                    max-width: 40dvw;

                    .border {
                        max-width: 45dvw;
                    }
                }
            }

            .paragraph {
                font-weight: ${fontStyle.lightWeight};
                font-size: ${fontSize.fontSizeBase};
                margin-bottom: 2rem;
                text-indent: 5rem;
                text-align: justify;
                
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
`