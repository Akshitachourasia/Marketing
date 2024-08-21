"use client"
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
const SliderOne = () => {
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        className: 'w-full mx-auto cursor-pointer center-mode',
    }
    if (isSmallScreen) {
        settings.slidesToShow = 1;
    }
    if (isMediumScreen) {
        settings.slidesToShow = 1.67;
    }
    return (
        <div>
            <Slider {...settings}>
                <>
                    <div className="rounded-md px-2 md:p-10">
                        <Image priority src="/images/business.jpg" alt="logo" width={500} height={500} className="rounded-2xl" />
                    </div>
                </>

                <>
                    <div className="rounded-md px-2 md:p-10">
                        <Image priority src="/images/coffe.jpg" alt="logo" width={500} height={500} className="rounded-2xl" />
                    </div>
                </>

                <>
                    <div className="rounded-md px-2 md:p-10">
                        <Image priority src="/images/small-business-3.webp" alt="logo" width={500} height={500} className="rounded-2xl" />
                    </div>
                </>

                <>
                    <div className="rounded-md px-2 md:p-10">
                        <Image priority src="/images/man.jpg" alt="logo" width={500} height={500} className="rounded-2xl" />
                    </div>
                </>

                <>
                    <div className="rounded-md px-2 md:p-10">
                        <Image priority src="/images/image-business.jpg" alt="logo" width={500} height={500} className="rounded-2xl" />
                    </div>
                </>
            </Slider>
        </div>
    )
}

export default SliderOne
