import * as React from "react"

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuestionSwiper from "../components/question-swiper"
import Contact from "../components/contact"

const StyledDevDesc = styled.div`
  font-size: 1.5rem;
  max-width: 960px;
  color: ${props => props.theme.greyTextColor};
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="ICPDAO Home" />

    <QuestionSwiper></QuestionSwiper>

    <div 
      style={{
        MarginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div
        style={{
          marginTop: "3rem",
          fontSize: "4rem"
        }}
      >We are developing...</div>

      <StyledDevDesc>Learn more about ICPDAO, chat with the team, others in the community, and have your say in shaping the future of the ICPDAO protocol.</StyledDevDesc>

      <Contact></Contact>
    </div>

  </Layout>
)

export default IndexPage
