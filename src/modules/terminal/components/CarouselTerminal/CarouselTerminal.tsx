import { Swiper, SwiperSlide } from 'swiper/react';
import CardTerminal from "../CardTerminal/CardTerminal";
import 'swiper/css';

const CarouselTerminal = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><CardTerminal /></SwiperSlide>
            <SwiperSlide><CardTerminal /></SwiperSlide>
            <SwiperSlide><CardTerminal /></SwiperSlide>
            <SwiperSlide><CardTerminal /></SwiperSlide>
        </Swiper>
        
     );
}

export default CarouselTerminal;