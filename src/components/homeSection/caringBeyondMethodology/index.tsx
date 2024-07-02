import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import caringBeyondTopic1 from "@assets/imgs/caringBeyondImages/caringBeyondTopic1.jpg"
import caringBeyondTopic2 from "@assets/imgs/caringBeyondImages/caringBeyondTopic2.jpg"
import caringBeyondTopic3 from "@assets/imgs/caringBeyondImages/caringBeyondTopic3.jpg"
import { useState } from "react"
interface ICaringBeyondMethTopic {
    title: string;
    explanation: string;
    image: string;
}

export const CaringBeyondMethodology = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const caringBeyondMethodology: ICaringBeyondMethTopic[] = [
        {
            title: "Avaliação Clínica Global e Nutricional",
            explanation: "Detalhe da dieta atual, identificação de hábitos prejudiciais e estratégias personalizadas.",
            image: caringBeyondTopic1
        },
        {
            title: "Atividade Física e Sono Reparador",
            explanation: "Avaliação de atividade física, suplementação e estratégias para melhorar o sono.",
            image: caringBeyondTopic2
        },
        {
            title: "Gestão de Ansiedade e Educação da Vontade",
            explanation: "Técnicas de relaxamento, estratégias para gerenciar a ansiedade e desenvolver novos hábitos.",
            image: caringBeyondTopic3
        }
    ];

    return (
        <Container id="methodology">
            <div className="content">
                <h2 className="title">
                    Nossa Abordagem: Cuidar Além
                </h2>
                <p className="description">
                    A Metodologia "Cuidar Além" é baseada em uma abordagem integral que abrange avaliação nutricional, física, mental e emocional.
                </p>
                <div className="info">
                    <div className="methodologyDescription">
                        <h3 className="subtitle">
                            Bases para uma Vida Plena
                        </h3>
                        <ul className="topics">
                            {caringBeyondMethodology.map((item, index) =>
                                <li
                                    key={item.title}
                                    className="topicItem"
                                >
                                    <div 
                                    className="topicBackground"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{ 
                                        opacity: hoveredIndex === null || hoveredIndex === index ? 0 : .4
                                     }}
                                    ></div>
                                    <img src={item.image} alt={item.title} className="topicImage" />
                                    <div className="info">
                                        <h4 className="topicTitle">
                                            {item.title}
                                        </h4>
                                        <p className="explanation">
                                            {item.explanation}
                                        </p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${style.secondaryColor};

    .content {
        padding: 2rem 2rem 4rem;
        max-width: 144rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        .title {
            font-size: ${fontSize.fontSizeLarge};
            color: ${style.primaryColor};
            text-align: center;
        }

        .description {
            font-size: ${fontSize.fontSizeMedium};
            color: ${style.secondaryTextColor};
            width: 80%;
            text-align: center;
        }

        .info {
            display: flex;
            gap: 3rem;

            .methodologyDescription {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                flex: 1;
                
                .subtitle {
                    font-size: ${fontSize.fontSizeMedium};
                    color: ${style.primaryColor};
                    font-weight: ${fontStyle.boldWeight};
                    text-align: center;
                    margin: 1rem 0;
                }

                .topics {
                    display: flex;
                    gap: 2rem;
                    flex-wrap: wrap;

                    .topicItem {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        max-width: 100%;
                        min-width: 30rem;
                        background-color: ${style.textColor};
                        border-radius: 1rem;
                        overflow: hidden;
                        border: ${style.textColor} solid .2rem;
                        transition: .5s;
                        cursor: default;
                        position: relative;

                        .topicBackground {
                            background: black;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            z-index: 1;
                            opacity: 0;
                            transition: .5s;
                        }

                        .topicImage {
                            z-index: 0;
                            height: 30rem;
                            object-fit: cover;
                            border-bottom: ${style.textColor} solid .2rem;
                            width: 100%;
                        }

                        .info {
                            z-index: 0;
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem 2rem;
                            
                            .topicTitle {
                                font-size: ${fontSize.fontSizeMedium};
                                color: ${style.primaryColor};
                                font-weight: ${fontStyle.mediumWeight};
                                text-align: center;
                                line-height: 120%;
                            }
                            
                            .explanation {
                                font-size: ${fontSize.fontSizeBase};
                                color: ${style.secondaryTextColor};
                                text-align: justify;
                                padding: 0 1rem;
                            }
                        }   
                        
                        &:hover {
                            scale: 1.05;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .content {
            .description {
                font-size: ${fontSize.fontSizeBase};
                width: 100%;
            }

            .info {
                flex-direction: column;

                .methodologyDescription {
                    .subtitle {
                        text-align: center;
                    }

                    .topics {
                        .topicItem {
                            min-width: 20rem;

                            .topicImage {
                                height: 20rem;
                            }
    
                            .info {
                                padding: 1rem;
                                
                                .topicTitle {
                                    font-size: ${fontSize.fontSizeBase};
                                }
                                
                                .explanation {
                                    line-height: 120%;
                                    font-size: ${fontSize.fontSizeSmall};
                                    text-align: center;
                                    padding: 0 0 1rem;
                                }
                            }   
                            
                            &:hover {
                                scale: 1.05;
                            }
                        }
                    }
                }
            }
        }
    }
`