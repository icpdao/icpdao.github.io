import React from 'react'

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StaticImage } from "gatsby-plugin-image"
import * as questionSwiperStyles from "./question-swiper.module.css"

const swiperStyle = require('swiper/swiper.scss')
const swiperStyle2 = require('swiper/components/navigation/navigation.scss')
const swiperStyle3 = require('swiper/components/pagination/pagination.scss')
const swiperStyle4 = require('swiper/components/scrollbar/scrollbar.scss')
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, A11y])


export default () => {
  return (
    <Swiper
      className={questionSwiperStyles.swipper}
      style={{
        paddingBottom: 50
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className={questionSwiperStyles.swipperBody}>
          <div 
            style={{
              fontSize: 100,
              lineHeight: "118px",
              marginBottom: 50
            }}
          >How to start a business with no money?
          </div>
          <StaticImage
            src="../images/coin.png"
            width={551}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="coin"
          />
          <div 
            style={{
              marginTop: 50,
              fontSize: 55
            }}
          >Listed First，Then Business</div>
          <div 
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: 28,
              maxWidth: 812,
              color: "#E8E9EA"
            }}
          >Publish your white paper and token, and openly recruit talent and funding to the entire network.</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={questionSwiperStyles.swipperBody}>
          <div 
            style={{
              fontSize: 100,
              lineHeight: "118px",
              marginBottom: 50
            }}
          >How to manege without experience?
          </div>
          <StaticImage
            src="../images/video.png"
            width={724}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="coin"
          />
          <div 
            style={{
              marginTop: 50,
              fontSize: 55
            }}
          >Do nothing</div>
          <div 
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: 28,
              maxWidth: 812,
              color: "#E8E9EA"
            }}
          >Power shared by all, decision by common consensus, and action driven by “token”.</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={questionSwiperStyles.swipperBody}>
          <div 
            style={{
              fontSize: 100,
              lineHeight: "118px",
              marginBottom: 50
            }}
          >How to quantify the work?
          </div>
          <StaticImage
            src="../images/vote.png"
            width={374}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="coin"
          />
          <div 
            style={{
              marginTop: 50,
              fontSize: 55
            }}
          >Open, Transparent, Democracy</div>
          <div 
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: 28,
              maxWidth: 812,
              color: "#E8E9EA"
            }}
          >The contributors themselves decide the content and price of the work and make it public, and the final icome is voted on by everyone.</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};