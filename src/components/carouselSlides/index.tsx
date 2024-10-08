import { fontSize, fontStyle, style } from "@styles/style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface ICarouselInfo {
  id: number;
  image: string;
  description?: string;
}

export interface ICarouselProps {
  info: ICarouselInfo[];
  slidesNumber: number;
  imagesHeightInRem?: number;
  spaceBetween?: number;
}

export const CarouselSlides: React.FC<ICarouselProps> = ({
  info,
  slidesNumber,
  imagesHeightInRem,
  spaceBetween,
}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      const smallDevicesScreen = window.innerWidth < 768;
      smallDevicesScreen
        ? setSlidesPerView(slidesNumber)
        : setSlidesPerView(slidesNumber + 1);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesNumber]);

  return (
    <Container $imagesHeight={imagesHeightInRem}>
      <Swiper
        loop={true}
        className="swiper"
        spaceBetween={spaceBetween ? spaceBetween : 50}
        slidesPerView={slidesPerView}
        navigation
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {info.map((item) => (
          <SwiperSlide key={item.id} className="slide">
            <img src={item.image} alt="slideImage" className="slideImage" />
            <h3 className="itemDescription">{item.description}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div<{ $imagesHeight: number | undefined }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  .swiper {
    width: 100%;
    border-radius: 1rem;
    padding: 0 4rem;

    .swiper-button-next,
    .swiper-button-prev {
      color: ${style.primaryColor};
      transition: 0.3s;
      opacity: 0.8;

      &:hover {
        scale: 1.2;
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
      background: ${style.primaryColor};
      width: 1.5rem;
      height: 1.5rem;
    }

    .slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4rem;
      user-select: none;

      .slideImage {
        width: 100%;
        min-width: 10rem;
        object-fit: cover;
        border-radius: 1rem;
        border: 0.3rem solid ${style.textColor};
        height: ${(props) =>
          props.$imagesHeight ? `${props.$imagesHeight}rem` : "auto"};
      }

      .itemDescription {
        font-size: ${fontSize.fontSizeMedium};
        font-weight: ${fontStyle.mediumWeight};
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    .swiper {
      .swiper-button-next,
      .swiper-button-prev {
        scale: 0.5;

        &:hover {
          scale: 0.7;
        }
      }

      .slide {
        font-size: ${fontSize.fontSizeBase};

        .slideImage {
          max-height: 25rem;
          height: ${(props) =>
            props.$imagesHeight ? `${props.$imagesHeight * 0.8}rem` : "auto"};
        }

        .itemDescription {
          font-size: ${fontSize.fontSizeBase};
        }
      }
    }
  }

  @media (max-width: 425px) {
    .swiper {
      .slide {
        .slideImage {
          max-height: 25rem;
          height: ${(props) =>
            props.$imagesHeight ? `${props.$imagesHeight * 0.6}rem` : "auto"};
        }

        .itemDescription {
          font-size: ${fontSize.fontSizeSmall};
        }
      }
    }
  }
`;
