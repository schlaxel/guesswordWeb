import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import gplay from '../img/gplay.png';
import astore from '../img/astore.png';

const Wrapper = styled.div`
    padding: 20px 20px;
`
const Heading = styled.h1`
    font-family: ${props => props.theme.fonts.bold};
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
`

const Stores = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const A = styled.a``

const SImage = styled.img`
    max-width: 200px;
`


const Header = () => {
    return (
        <Wrapper>
            <Heading>Guessword</Heading>
            <Logo />
            <Stores>
                <A href="https://play.google.com/store/apps/details?id=media.kiefer.guessword"> 
                    <SImage src={gplay} alt="Google Play" />
                </A>
                <A href="https://apps.apple.com/us/app/guessword-party-game/id1545221790">
                    <SImage src={astore} alt="App Store" />
                </A>
            </Stores>
        </Wrapper>
    )
};

export default Header;