import { Swiper, SwiperSlide } from 'swiper/react';
import promotion1 from '../assets/promo/promotion-1.jpg';
import promotion2 from '../assets/promo/promotion-2.jpg';
import promotion3 from '../assets/promo/promotion-3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/swiper.css';
import { Container, Image } from 'react-bootstrap';
import { Autoplay } from 'swiper/modules';

const HeroBanners = () => {
    return (
        <>
            <Container className='mt-3'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='row align-items-center'>
                                    <div className='col-md-9'>
                                        <Image
                                            src={promotion1}
                                            style={{
                                                borderRadius: '32px',
                                                maxHeight: '480px'
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-3 mb-4'>
                                        <h1 className="fw-bold">Title Here</h1>
                                        <h5 className="fw-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni.</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='row align-items-center'>
                                    <div className='col-md-9'>
                                        <Image
                                            src={promotion2}
                                            modules={[Autoplay]}
                                            autoPlay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            style={{
                                                borderRadius: '32px',
                                                maxHeight: '480px'
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-3 mb-4'>
                                        <h1 className="fw-bold">Title Here</h1>
                                        <h5 className="fw-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni.</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='row align-items-center'>
                                    <div className='col-md-9'>
                                        <Image
                                            src={promotion3}
                                            modules={[Autoplay]}
                                            autoPlay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            style={{
                                                borderRadius: '32px',
                                                maxHeight: '480px'
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-3 mb-4'>
                                        <h1 className="fw-bold">Title Here</h1>
                                        <h5 className="fw-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magni.</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HeroBanners;