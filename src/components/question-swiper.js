import React from 'react'

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StaticImage } from "gatsby-plugin-image"

import QuestionSwiperSlideContent from "./question-swiper-slide-content"
import YoutubeVideo from "./youtube-video"

require('swiper/swiper.scss')
require('swiper/components/navigation/navigation.scss')
require('swiper/components/pagination/pagination.scss')
require('swiper/components/scrollbar/scrollbar.scss')

SwiperCore.use([Navigation, Pagination, A11y])


const QuestionSwiper = () => {
  return (
    <Swiper
      style={{
        paddingBottom: "4rem",
        marginTop: "2rem",
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
              width={451}
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
            <div style={{marginBottom: "-2rem"}}>
              <YoutubeVideo videoId="i7FSv9tIhqs" />
            </div>
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

export default QuestionSwiper