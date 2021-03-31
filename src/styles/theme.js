import { createGlobalStyle } from 'styled-components'


const white = '#FFFFFF'
const black = '#000000'

export const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : '#010101',
  backgroundColor: darkMode ? '#000000': '#FFFFFF',
  cardBG: darkMode ? '#080C13': '#F4EDED',
  borderColor: darkMode ? "#272E3E": "#EDEAEA",
  colors: {
    link: darkMode ? '#2F80ED' : '#FF007A'
  },
  greyTextColor: darkMode ? '#E8E9EA' : '#141112',
  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)'
  }
})

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    font-variant: none;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    overflow-y: scroll;
    width: 100%;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Lucida Grande", "Inter Roman", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;

    line-height: 1.55;
    /* max-width: 1440px; */
    width: 100%;
    margin: 0px auto;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.textColor};

    @media (min-width: 1441px) {
        overflow-x: visible;
    }
  }

  #gatsby-focus-wrapper .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    width: 1rem;
    height: 1rem;
    margin-right: 0.9rem;
    background-color: #48587C;
    opacity: 1;
  }
  #gatsby-focus-wrapper .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background-color: #91ABE8;
    opacity: 1;
  }
  
  #gatsby-focus-wrapper{
    min-height: 100vh;
    width: 100%;
    position: relative;
  }
  a{
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  button{
    color: ${({ theme }) => theme.textColor};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

`
