import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videos = [
  "https://www.youtube.com/watch?v=1Y5QF4IscuI",
  "https://www.youtube.com/watch?v=wFDTsZKA-q8",
  "https://www.youtube.com/watch?v=2mHYIiNy7s4",
  "https://www.youtube.com/watch?v=GC_JEO7d3Mg",
  "https://www.youtube.com/watch?v=hbn_1h6BBXk",
  "https://www.youtube.com/watch?v=Fe99A5thb08",
  "https://www.youtube.com/watch?v=6z6CX9PyvcA",
  "https://www.youtube.com/watch?v=xkT6Ltu2z5s",
  "https://www.youtube.com/watch?v=VmH4n8csVAo",
  "https://www.youtube.com/watch?v=_iyd6ZF9RAM",
  "https://www.youtube.com/watch?v=zMu1WRQvE9A",
];

const getYouTubeID = (url) => {
  const arr = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return arr[2] !== undefined ? arr[2].split(/[^0-9a-z_\-]/i)[0] : arr[0];
};

const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 0;

  .swiper_container {
    padding: 0 4rem;
    width: 100%;
    height: 100%;
    --swiper-navigation-sides-offset: 0;
  }

  .swiper-slide {
    width: 320px;
    height: 180px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    overflow: hidden;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 44px;
    height: 44px;
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 1px solid rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease-in-out;

    &:after {
      font-size: 1.1rem;
      font-weight: 900;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      transform: scale(1.08);
    }
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const VideoList = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding: 0 2rem;
    gap: 2rem;
  }
`;

const VideoCard = styled.div`
  min-width: 240px;
  max-width: 280px;
  background: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(211, 47, 47, 0.18);
  }
  @media (max-width: 480px) {
    min-width: 200px;
    max-width: 240px;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bg});
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.92;
`;

const PlayButton = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.92;
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoCarousel = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <CarouselWrapper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {videos.map((videoUrl) => {
          const videoID = getYouTubeID(videoUrl);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoID}/0.jpg`;

          return (
            <SwiperSlide key={videoID}>
              {playingVideo === videoID ? (
                <IframeWrapper>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </IframeWrapper>
              ) : (
                <Thumbnail
                  bg={thumbnailUrl}
                  onClick={() => setPlayingVideo(videoID)}
                >
                  <PlayButton>&#9658;</PlayButton>
                </Thumbnail>
              )}
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
        <div className="swiper-pagination" />
      </Swiper>
    </CarouselWrapper>
  );
};

export default VideoCarousel;
