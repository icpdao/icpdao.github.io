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

const StyledDevTitle = styled.div`
  font-size: 4rem;
`

const StyledDev = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding-top: 6rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="ICPDAO Home" />

    <QuestionSwiper></QuestionSwiper>

    <StyledDev>
      <StyledDevTitle>We are developing...</StyledDevTitle>
      <StyledDevDesc>Learn more about ICPDAO, chat with the team, others in the community, and have your say in shaping the future of the ICPDAO protocol.</StyledDevDesc>

      <Contact></Contact>
    </StyledDev>

  </Layout>
)

export default IndexPage
