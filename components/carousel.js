import styles from '../styles/module/home.module.scss'
import utils from '../styles/module/utils.module.scss'
import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiShareBoxFill } from 'react-icons/ri';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const cate = [
  { name: 'B’COOL FUYOO', bg: 'linear-gradient(206.65deg, #FF6202 16.71%, #FF0000 118.94%)'},
  { name: 'B’QUEENZ MATTE', bg: 'linear-gradient(29.54deg, #5700C7 20.8%, #609FFF 99.31%)'},
  { name: 'BB CREAM', bg: 'linear-gradient(29.54deg, #A35BFF 20.8%, #609FFF 99.31%)'},
  { name: 'JUS B KLEAR', bg: 'linear-gradient(206.65deg, #30CB5C 16.71%, #477C12 118.94%)'},
  { name: 'JUS SAKURA', bg: 'linear-gradient(29.54deg, #E499FF 20.8%, #F7C5FF 99.31%)'},
  { name: 'KOPI FUYOO', bg: 'linear-gradient(29.54deg, #B44D37 20.8%, #DC7058 99.31%)'},
  { name: 'OXYGEN BUBBLE MASK', bg: 'linear-gradient(206.65deg, #FF6202 16.71%, #FF0000 118.94%)'},
  { name: 'SABUN EMAS', bg: 'linear-gradient(202.05deg, #FFE600 -13.97%, #FFD01F 53.75%, #FFC530 88.93%)'}
]

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: 0
        };
    }

    handleChange = (e) => {
        const value = parseInt(e.target.value);
        this.setState({
            [e.target.name]: value
        });
    }

    render () {
        // use this.props.xxx to call global states
        return (
            <div className={`row m-0 ${styles.carousel_layout}`}>
                <div className="col-lg-3 d-flex align-items-center flex-column justify-content-center">
                    <div className={styles.grant_title}>Grants of the Week</div>
                    <button className={`mt-4 align-self-start ${styles.outline_btn}`}>Browse All</button>
                </div>
                <div className="col-lg-9 p-4">
                    <Swiper
                        spaceBetween={20}
                        breakpoints={{
                            240: { slidesPerView: 1.3, },
                            1268: { slidesPerView: 2.4, }
                        }}
                        navigation
                        autoplay= {{ delay: 3000 }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={`${styles.prodcard} w-100 m-0`}>
                                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                                <button className={styles.apply}>Apply Now</button>
                                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.prodcard} w-100 m-0`}>
                                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                                <button className={styles.apply}>Apply Now</button>
                                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.prodcard} w-100 m-0`}>
                                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                                <button className={styles.apply}>Apply Now</button>
                                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.prodcard} w-100 m-0`}>
                                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                                <button className={styles.apply}>Apply Now</button>
                                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`${styles.prodcard} w-100 m-0`}>
                                <Link href="/products/generic"><a className={styles.prodtitle}>SME Corp Business Scale-Up Programme</a></Link>
                                <p>Bizup Programme is to assist SMEs to grow and expand their businesses locally and globally.</p>
                                <div className={styles.action_btn_yellow}>Up to RM 400,000</div>
                                <button className={styles.apply}>Apply Now</button>
                                <button className={styles.share}><RiShareBoxFill/> Read More</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default Carousel;