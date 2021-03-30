import React from 'react'

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StaticImage } from "gatsby-plugin-image"

import QuestionSwiperSlideContent from "./question-swiper-slide-content"

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
      style={{
        paddingBottom: 50,
        marginTop: 100,
        maxWidth: 1160
      }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>
        <QuestionSwiperSlideContent
          titleText="How to start a business with no money?"
          desc={
            <StaticImage
              src="../images/coin.png"
              width={551}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="coin"
            />
          }
          subTitleText="Listed First，Then Business"
          subDescText="Publish your white paper and token, and openly recruit talent and funding to the entire network."
        >
        </QuestionSwiperSlideContent>
      </SwiperSlide>
      
      <SwiperSlide>
        <QuestionSwiperSlideContent
          titleText="How to manege without experience?"
          desc={
            <StaticImage
              src="../images/video.png"
              width={724}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="coin"
            />
          }
          subTitleText="Do nothing"
          subDescText="Power shared by all, decision by common consensus, and action driven by “token”."
        >
        </QuestionSwiperSlideContent>
      </SwiperSlide>

      <SwiperSlide>
        <QuestionSwiperSlideContent
          titleText="How to quantify the work?"
          desc={
            <StaticImage
              src="../images/vote.png"
              width={374}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="coin"
            />
          }
          subTitleText="Open, Transparent, Democracy"
          subDescText="The contributors themselves decide the content and price of the work and make it public, and the final icome is voted on by everyone."
        >
        </QuestionSwiperSlideContent>
      </SwiperSlide>

    </Swiper>
  );
};