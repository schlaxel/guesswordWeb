import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 90px;
    height: 90px;
`

const Logo = () => (
    <Wrapper>
        <Img src={logo} alt="Guessword" />
    </Wrapper>
);

export default Logo;