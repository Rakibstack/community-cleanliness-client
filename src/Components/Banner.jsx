import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div>

            <Swiper className='w-full .h-[320px] md:h-[456px] lg:h-[640px]' modules={[Navigation, Pagination,Autoplay]}
                autoplay={{delay: 2500}}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}>
                <SwiperSlide>
                <img className='w-full h-full object-cover' src="https://i.ibb.co.com/Gfp5dzq2/3363761.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-full h-full object-cover' src="https://i.ibb.co.com/xqQywV7p/6192782.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-full h-full object-cover' src="https://i.ibb.co.com/hFYpXHNZ/4589436.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-full h-full object-cover' src="https://i.ibb.co.com/h1gNFBR8/ruins-derelict-mansion-lebanon-after-war.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
             
             
        </div>
    );
};

export default Banner;