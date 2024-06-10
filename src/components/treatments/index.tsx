import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface ICarouselContent {
    id: number,
    image: string,
    title: string
}

export const Treatments = () => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2)

    const carouselContent: ICarouselContent[] = [
        { id: 1, image: "https://placehold.co/100x100", title: "Título 1" },
        { id: 2, image: "https://placehold.co/200x200", title: "Título 2" },
        { id: 3, image: "https://placehold.co/300x300", title: "Título 3" },
        { id: 4, image: "https://placehold.co/400x400", title: "Título 4" },
        { id: 5, image: "https://placehold.co/500x500", title: "Título 5" },
        { id: 6, image: "https://placehold.co/600x600", title: "Título 6" }
    ]

    useEffect(() => {
        const handleResize = () => {
            const smallDevicesScreen = window.innerWidth < 768
            smallDevicesScreen ? setSlidesPerView(2) : setSlidesPerView(3)
        };
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])

    return (
        <Container theme={style}>
            <h2 className="title">
                Seja bem-vindo ao site
            </h2>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque iste! Numquam repudiandae accusamus accusantium, ea id ducimus expedita harum iusto ipsa eveniet ratione enim eaque! Autem, delectus earum?</p>
            <div className="carousel">
                <Swiper
                    loop={true}
                    className="swiper"
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{
                        dynamicBullets: true, clickable: true
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {carouselContent.map(item =>
                        <SwiperSlide key={item.id} className="slide">
                            <img src={item.image} alt="slideImage" className="slideImage" />
                            <h3 className="itemTitle">{item.title}</h3>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
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
        color: ${({ theme }) => theme.primaryColor};
        font-size: ${fontSize.fontSizeLarge};
        text-align: center;
    }

    .text {
        font-size: ${fontSize.fontSizeBase};
        max-width: 90rem;
        text-align: center;
    }

    .carousel {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;

        .swiper {
            width: 100%;
            border-radius: 1rem;
            padding: 0 4rem;

            .swiper-button-next, .swiper-button-prev {
                color: ${({ theme }) => theme.primaryColor};
                transition: .3s;
                opacity: .8;

                &:hover {
                    scale: 1.2;
                    color: ${({ theme }) => theme.primaryColor};
                    opacity: 1;
                }
            }

            .swiper-button-next {
                right: 0;
                transform: translateY(-50%);
            }

            .swiper-button-prev {
                left: 0;
                transform: translateY(-50%);
            }

            .swiper-pagination-bullet {
                background: ${({ theme }) => theme.primaryColor};
            }

            .slide {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 3rem;

                .slideImage {
                    width: 30rem;
                    height: auto;
                    max-height: 35rem;
                    object-fit: cover;
                    border-radius: 1rem;
                    border: .3rem solid ${({ theme }) => theme.textColor};
                    }
                    
                    .itemTitle {
                        font-size: ${fontSize.fontSizeMedium};
                        font-weight: ${fontStyle.mediumWeight};
                    }
            }
        }
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