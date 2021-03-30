import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './theme'
import { useDarkMode } from '../contexts/application'

export const StyledThemeProvider = props => {
  const [isDarkMode] = useDarkMode()

  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <GlobalStyle isDark={isDarkMode} />
      {props.children}
    </ThemeProvider>
  )
}
