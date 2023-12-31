/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';

import './Slider.css';
import SliderCard from './SliderCard';

const TestmonialSlider = () => {
    return (
        <div className=" py-10 rounded-2xl">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                watchSlidesProgress
                pagination={{
                    clickable: true,
                    renderBullet(index, className) {
                        return `<span class="${className}">${index + 1}</span>`;
                    }
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
                modules={[Pagination, Autoplay]}>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide1 cursor-grab">
                    <SliderCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestmonialSlider;
