import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as indexStyles from "./index.module.css"

import QuestionSwiper from "../components/question-swiper"

const IndexPage = () => (
  <Layout>
    <SEO title="ICPDAO Home" />

    <QuestionSwiper></QuestionSwiper>

    <div className={indexStyles.info}>
      <div
        style={{
          marginTop: 50,
          fontSize: 64,
        }}
      >We are developing...</div>

      <div
        style={{
          fontSize: 28,
          maxWidth: 960,
          color: "#FAFAFB",
          textAlign: 'center'
        }}
      >Learn more about ICPDAO, chat with the team, others in the community, and have your say in shaping the future of the ICPDAO protocol.</div>

      <div className={indexStyles.contactList}>

        <a className={indexStyles.contactInfoLink} href="https://twitter.com/icpdao" target="_blank">
          <div className={`${indexStyles.contactInfo} ${indexStyles.twitter}`}>
            <StaticImage
              className={indexStyles.contactInfoIcon}
              src="../images/twitter.png"
              width={82}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="twitter"
            />
            <div className={indexStyles.contactInfoName}>Twitter</div>
            <div className={indexStyles.contactInfoDesc}>Follow @ICPDAO for updates and news.</div>
          </div>
        </a>

        <a className={indexStyles.contactInfoLink} href="https://twitter.com/icpdao" target="_blank">
          <div className={`${indexStyles.contactInfo} ${indexStyles.discord}`}>
            <StaticImage
              className={indexStyles.contactInfoIcon}
              src="../images/discord.png"
              width={82}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Discord"
            />
            <div className={indexStyles.contactInfoName}>Discord</div>
            <div className={indexStyles.contactInfoDesc}>Chat in real time with the ICPDAO community.</div>
          </div>
        </a>
  
        <a className={indexStyles.contactInfoLink} href="mailto:icpdao06@gmail.com" target="_blank">
          <div className={`${indexStyles.contactInfo} ${indexStyles.gmail}`}>
            <StaticImage
              className={indexStyles.contactInfoIcon}
              src="../images/gmail.png"
              width={82}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Gmail"
            />
            <div className={indexStyles.contactInfoName}>Gmail</div>
            <div className={indexStyles.contactInfoDesc}>Send email to icpdao06@gmail.com</div>
          </div>
        </a>

        <a className={indexStyles.contactInfoLink} href="https://www.youtube.com/channel/UC9vo3RcUbA6V4V6ouYR8nqg" target="_blank">
          <div className={`${indexStyles.contactInfo} ${indexStyles.youtube}`}>
            <StaticImage
              className={indexStyles.contactInfoIcon}
              src="../images/youtube.png"
              width={82}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Youtube"
            />
            <div className={indexStyles.contactInfoName}>Youtube</div>
            <div className={indexStyles.contactInfoDesc}>Follow @ICPDAO for videos and news.</div>
          </div>
        </a>
      </div>
    </div>

  </Layout>
)

export default IndexPage
