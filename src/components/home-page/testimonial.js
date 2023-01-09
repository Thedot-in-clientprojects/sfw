import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial({ testimonialItems }) {
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);
    return (
        <div className="testimonial-area bg-azure">
            <div className="container">
                <div className="grid-cols-1">
                    <div className="flex items-center justify-between mb-[65px]">
                        <h2 className="testimonial-title">
                            +1,250 Happy Clients
                        </h2>
                        <div className="swiper-button-wrap flex cursor-pointer text-[#999999] text-[30px]">
                            <div
                                className="swiper-button transition-all hover:text-black mr-[10px]"
                                ref={prevRef}
                            >
                                <AiIcons.AiOutlineLeft />
                            </div>
                            <div
                                className="swiper-button transition-all hover:text-black"
                                ref={nextRef}
                            >
                                <AiIcons.AiOutlineRight />
                            </div>
                        </div>
                    </div>
                    <Swiper
                        pagination={false}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop
                        navigation={{
                            prevEl: prevRef?.current,
                            nextEl: nextRef?.current,
                        }}
                        onSwiper={setSwiper}
                        updateOnWindowResize
                        observer
                        observeParents
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonialItems?.map((testimonialItem) => {
                            const Icon = FaIcons[testimonialItem?.quote];
                            return (
                                <SwiperSlide key={testimonialItem?.id}>
                                    <div className="testimonial-block">
                                        <div className="inner-box relative before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-primary before:transition-all before:duration-500 before:scale-0 before:hover:scale-100">
                                            <div className="quote flex justify-end text-primary text-[30px] leading-[60px] py-[10px]">
                                                <Icon />
                                            </div>
                                            <h2 className="testimonial-author">
                                                {testimonialItem?.authorName}
                                                <span className="occupation">
                                                    {
                                                        testimonialItem?.authorOccupation
                                                    }
                                                </span>
                                            </h2>
                                            <p className="testimonial-feedback">
                                                {testimonialItem?.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
};

export default Testimonial;
