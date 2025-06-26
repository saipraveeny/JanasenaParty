import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import images
import janavaniImage from "../assets/images/janavani.jpg";
import homePageImage from "../assets/images/homepage.jpg";
import ideologiesImage from "../assets/images/telugu7idealogies.jpg";

const slides = [
  {
    image: janavaniImage,
    title: "JanaVani - Voice of the People",
    subtitle: "Empowering democracy through transparency and accountability",
    description:
      "Building a stronger, more inclusive society through democratic values",
  },
  {
    image: homePageImage,
    title: "JanaSena Party",
    subtitle: "For Common Man's Victory and Democratic Values",
    description: "Working towards the welfare of every citizen",
  },
  {
    image: ideologiesImage,
    title: "Seven Ideologies",
    subtitle: "Building a stronger, more inclusive society",
    description: "United by principles, driven by progress",
  },
];

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
  overflow: hidden;
  box-shadow: none;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 480px) {
    height: 100vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #d32f2f;
    transform: scale(1.2);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #d32f2f;
    background: rgba(255, 255, 255, 0.9);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
      background: #d32f2f;
      color: white;
      transform: scale(1.1);
    }

    &::after {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const SlideImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.image})`,
  },
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const SlideContentWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 2;
  pointer-events: none;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  padding: 0 2.5rem 2.5rem 0;
  max-width: 420px;
  min-width: 120px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  margin: 0 2vw 2vw 0;
  pointer-events: auto;
  @media (max-width: 768px) {
    padding: 0 1.2rem 1.2rem 0;
    max-width: 80vw;
    min-width: 0;
    margin: 0 1vw 1vw 0;
  }
  @media (max-width: 480px) {
    padding: 0 0.7rem 0.7rem 0;
    max-width: 98vw;
    margin: 0 0.5vw 0.5vw 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.18);
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 0.3rem 0;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.18);
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  margin: 0 0 1.1rem 0;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.18);
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ReadMoreButton = styled.button`
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 999px;
  padding: 0.45rem 1.3rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 0.2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.08);
  transition: background 0.18s, color 0.18s, border 0.18s;
  pointer-events: auto;
  &:hover {
    background: #fff;
    color: #d32f2f;
    border: 1.5px solid #d32f2f;
  }
`;

const GlassNavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #d32f2f;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s, transform 0.18s;
  outline: none;
  border: none;
  &:hover {
    background: #fff;
    color: #d32f2f;
    border: 1.5px solid #d32f2f;
    transform: translateY(-50%) scale(1.08);
  }
  &.prev {
    left: 2vw;
  }
  &.next {
    right: 2vw;
  }
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
    &.prev {
      left: 1vw;
    }
    &.next {
      right: 1vw;
    }
  }
`;

const HeroCarousel = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <SlideImage image={slide.image}>
              <SlideContentWrapper>
                <SlideContent>
                  <ReadMoreButton>Read More</ReadMoreButton>
                </SlideContent>
              </SlideContentWrapper>
            </SlideImage>
          </SwiperSlide>
        ))}
        <GlassNavButton
          className="prev"
          ref={prevRef}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </GlassNavButton>
        <GlassNavButton className="next" ref={nextRef} aria-label="Next Slide">
          <FaChevronRight />
        </GlassNavButton>
      </Swiper>
    </CarouselContainer>
  );
};

export default HeroCarousel;
