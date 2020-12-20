import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    height: 100%;
    width: 100%;
    background: #212121;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    height: 100%;
    width: 100%;
  }
  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`

const theme = {
    colors: {
        bg: '#212121',
        bg2: '#111111',
        fg: '#eeeeee',
        accent: '#f4a4ba',
        accent2: '#fcff86'
    },
    fonts: {
        normal: 'Source Sans Pro',
        fancy: 'Sriracha',
        bold: 'Luckiest Guy'
    },
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.fg};
    font-family: ${props => props.theme.fonts.normal};
`

const SiteWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>{children}</Wrapper>
        </ThemeProvider>
    )
}

export default SiteWrapper;
