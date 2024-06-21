import { CarouselSlides, ICarouselInfo } from "@components/carouselSlides"
import { fontSize, style } from "@styles/style"
import styled from "styled-components"

export const Treatments = () => {
    const carouselContent: ICarouselInfo[] = [
        { id: 1, image: "https://placehold.co/100x100", description: "Título 1" },
        { id: 2, image: "https://placehold.co/200x200", description: "Título 2" },
        { id: 3, image: "https://placehold.co/300x300", description: "Título 3" },
        { id: 4, image: "https://placehold.co/400x400", description: "Título 4" },
        { id: 5, image: "https://placehold.co/500x500", description: "Título 5" },
        { id: 6, image: "https://placehold.co/600x600", description: "Título 6" }
    ]

    return (
        <Container theme={style}>
            <h2 className="title">
                Seja bem-vindo ao site
            </h2>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque iste! Numquam repudiandae accusamus accusantium, ea id ducimus expedita harum iusto ipsa eveniet ratione enim eaque! Autem, delectus earum?</p>
            <CarouselSlides info={carouselContent} slidesNumber={2} />
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
        color: ${style.textColor};
        font-size: ${fontSize.fontSizeLarge};
        text-align: center;
    }
    
    .text {
        color: ${style.textColor};
        font-size: ${fontSize.fontSizeBase};
        max-width: 90rem;
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