import { CarouselSlides } from "@components/carouselSlides"
import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import data from "@json/data.json"
import { Button } from "@components/button"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

export const Treatments = () => {
    return (
        <Container>
            <h2 className="title">
                Nossos serviços
            </h2>
            <h3 className="subtitle">
                Consultas presenciais e teleatendimento
            </h3>
            <CarouselSlides info={data.treatments} slidesNumber={2} />
            <Button content="Veja todos os serviços" icon={faCircle} href=""/>
        </Container>
    )
}

const Container = styled.section`
    max-width: 144rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1rem;

    .title {
        color: ${style.primaryColor};
        font-size: ${fontSize.fontSizeLarge};
        text-align: center;
    }

    .subtitle {
        color: ${style.secondaryTextColor};
        font-size: ${fontSize.fontSizeMedium};
        font-weight: ${fontStyle.mediumWeight};
        text-align: center;
    }

    @media (max-width: 768px) {
        .title {
            font-size: ${fontSize.fontSizeMedium};
        }

        .carousel {
            .swiper {
                .swiper-button-next, .swiper-button-prev {
                    scale: .5;
                                    
                    &:hover {
                        scale: .7;
                    }
                }

                .slide {
                    font-size: ${fontSize.fontSizeBase};

                    .slideImage {
                        width: 18rem;
                        max-height: 25rem;
                    }
                }
            }
        }
    }
`