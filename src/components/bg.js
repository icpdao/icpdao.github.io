import React from 'react'
import styled from 'styled-components'
import { useDarkMode } from '../contexts/application'

const StyledBG = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor};
  -webkit-transform: translate3d(0, 0, 0);
  height: -webkit-fill-available;
  background: ${props => {
    if (props.isDark) {
      return "linear-gradient(180deg, #0E0F11 0%, #111620 100%);"
    } else {
      return "linear-gradient(180deg, #FFFFFF 0%, #FFF5F5 51%, #FFFFFF 100%);"
    }
  }};
  user-select: none;
  pointer-events: none;
`

const BG = () => {
  const [darkMode] = useDarkMode()

  return <StyledBG isDark={darkMode} />
}
export default BG
