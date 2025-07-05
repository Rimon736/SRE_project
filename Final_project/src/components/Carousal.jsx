import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import required modules
import 'swiper/css';
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles

const Carousal = () => {
    return (
        <div className='max-w-11/12 mx-auto rounded-xl shadow-md my-2'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Instant Money Transfer
                  </h3>
                  <p className="text-lg">Send and receive money in seconds</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-64  flex items-center justify-center">
                <div className="text-center  p-6">
                  <h3 className="text-2xl font-bold mb-2">24/7 Services</h3>
                  <p className="text-lg">Pay anytime, from anywhere</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center  p-6">
                  <h3 className="text-2xl font-bold mb-2">Secure Online Pay</h3>
                  <p className="text-lg">Your security is our top priority</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    );
};

export default Carousal;