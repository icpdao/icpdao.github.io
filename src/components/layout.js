/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import BG from "./bg"
import { StyledThemeProvider } from '../styles/themeManager'

const StyledBody = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 12rem;
border-bottom: 1px solid ${({ theme }) => theme.borderColor};
@media (max-width: 960px) {
  margin-bottom: 0;
  padding: 2rem;
  padding-bottom: 8rem;
}
`

const StyledFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
height: 12rem;
padding-bottom: 2rem;
color: ${props => props.theme.textColor};

@media (max-width: 1155px) {
  display: block;
}

@media (max-width: 960px) {
  margin: 0;
  flex-direction: column;
  padding: 0;
  height: 0;
  display: NONE;
}
`


const Layout = ({ children }) => {

  return (
    <StyledThemeProvider>
      <Header />
      <StyledBody>
        {children}
      </StyledBody>
      <StyledFooter>
        <div>© {new Date().getFullYear()}, icpdao</div>
      </StyledFooter>
      <BG />
    </StyledThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
