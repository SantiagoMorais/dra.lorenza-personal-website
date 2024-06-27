import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import data from "@json/data.json"

export const CaringBeyondMethodology = () => {
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
                    <img className="image" src="https://placehold.co/300x300" alt="imagem da metodologia 'Cuidar Além'" />
                    <div className="methodologyDescription">
                        <h3 className="subtitle">
                            Bases para uma Vida Plena
                        </h3>
                        <ul className="topics">
                            {data.caringBeyondMethTopics.map(item =>
                                <li key={item.title} className="topicItem">
                                    <h4 className="topicTitle">
                                        {item.title}
                                    </h4>
                                    <p className="explanation">
                                        {item.explanation}
                                    </p>
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
            margin-top: 1rem;

            .image {
                flex: 1;
                border-radius: 1rem;
                box-shadow: .5rem .5rem .5rem ${style.tertiaryColor};
                object-fit: cover;
                object-position: center;
            }

            .methodologyDescription {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                flex: 1;
                
                .subtitle {
                    font-size: ${fontSize.fontSizeMedium};
                    color: ${style.primaryColor};
                    font-weight: ${fontStyle.boldWeight};
                }

                .topics {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    .topicItem {
                        list-style-type: disc;
                        margin-left: 1.6rem;

                        .topicTitle {
                            font-size: ${fontSize.fontSizeBase};
                            color: ${style.primaryColor};
                            font-weight: ${fontStyle.mediumWeight};
                        }

                        .explanation {
                            font-size: ${fontSize.fontSizeBase};
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

                .image {
                    width: 100%;
                }

                .methodologyDescription {
                    .subtitle {
                        text-align: center;
                    }
                }
            }
        }
    }
`