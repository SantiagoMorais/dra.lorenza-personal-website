import { CarouselSlides } from "@components/carouselSlides"
import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import image1 from "@assets/imgs/servicesImages/servicesImage1.jpg"
import image2 from "@assets/imgs/servicesImages/servicesImage2.jpg"
import image3 from "@assets/imgs/servicesImages/servicesImage3.jpg"
import image4 from "@assets/imgs/servicesImages/servicesImage4.jpg"
import image5 from "@assets/imgs/servicesImages/servicesImage5.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserMd } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export const Treatments = () => {
    const [spaceBetweenCarousel, setSpaceBetweenCarousel] = useState<number>(50)

    const treatmentsData = [
        { "id": 1, "description": "Avaliação nutricional personalizada", "image": image1 },
        { "id": 2, "description": "Composição corporal (bioimpedância)", "image": image2 },
        { "id": 3, "description": "Reprogramação de sono", "image": image3 },
        { "id": 4, "description": "Gestão de ansiedade", "image": image4 },
        { "id": 5, "description": "Consultas de suplementação e intervenção medicamentosa", "image": image5 }
    ];

    useEffect(() => {
        const handleSpaceBetween = () => {
            const largeDevicesScreen = window.innerWidth > 768
            const mediumDevicesScreen = window.innerWidth <= 768 && window.innerWidth > 425
            if(largeDevicesScreen) {
                setSpaceBetweenCarousel(50)
            } else if (mediumDevicesScreen) {
                setSpaceBetweenCarousel(30)
            } else {
                setSpaceBetweenCarousel(10)
            }
        }

        window.addEventListener("resize", handleSpaceBetween)

        return () => (window.removeEventListener("resize", handleSpaceBetween))
    }, [])

    return (
        <Container>
            <h2 className="title">
                Nossos serviços
            </h2>
            <h3 className="subtitle">
                Consultas presenciais e teleatendimento
            </h3>
            <CarouselSlides info={treatmentsData} slidesNumber={2} imagesHeightInRem={30} spaceBetween={spaceBetweenCarousel} />
            <p className="moreInfoButton">
                <FontAwesomeIcon icon={faUserMd}/>
                Entre em contato e confira nossos outros serviços disponíveis.
            </p>
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

    .moreInfoButton {
        padding: .5rem 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: ${fontSize.fontSizeMedium};
        border-radius: 50rem;
        border: none;
        transition: .3s;
        color: ${style.secondaryTextColor};
        text-align: center;
        font-weight: ${fontStyle.mediumWeight};
    }

    @media (max-width: 768px) {
        padding: 2rem 0;

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

        .moreInfoButton {
            font-size: ${fontSize.fontSizeBase};
        }
    }
`
