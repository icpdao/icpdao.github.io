import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Sun, Moon } from 'react-feather'
import styled from 'styled-components'

import { useDarkMode } from '../contexts/application'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  width: 100%;
  z-index: 3;
  position: sticky;
  top: -1px;
  background: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.backgroundColor};
  transition: background-color 0.25s ease;
  @media (max-width: 960px) {
    padding: 1.5rem 2rem;
    height: '100vh';
  }
`


const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  path {
    fill: ${props => props.darkMode ? "#FFFFFF" : "#010101"};
  }
  color: ${props => props.darkMode ? "#FFFFFF" : "#010101"};
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

const Header = () => {

  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <StyledHeader>

      <div 
        style={{
          display: "flex",
          alignItems: "center"
        }}>
        <StaticImage
          src="../images/icon.png"
          width={48}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="logo"
        />
        <StaticImage
          style={{
            marginLeft: 10
          }}
          src="../images/logo.png"
          height={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="icpdao"
        />
      </div>

      <StyledButton darkMode={darkMode} type="button" onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </StyledButton>

    </StyledHeader>
  )
}


export default Header
