import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeSlash } from 'styled-icons/bootstrap';

const Wrapper = styled.div`
    padding: 20px;
`
const PhoneWrap = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 0 20px;
    border: solid 5px #fff;
    border-radius: 50px;
`
const Notch = styled.div`
    background: #fff;
    border-radius: 0 0 13px 13px;
    width: 150px;
    height: 30px;
    margin: auto;
`
const Word = styled.div`
    margin-top: 10px;
    background: ${props => props.theme.colors.accent2};
    padding: 20px 10px 0 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.bg};
    font-size: 2em;
    font-family: ${props => props.theme.fonts.bold};
`
const UserWords = styled.div`
    padding: 20px 0;
`
const UserWordWrapper = styled.div`
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    background: ${props => props.theme.colors.bg2};
    text-align: center;
`
const UserWord = styled.p`
    color: ${props => props.theme.colors.accent2};
    font-size: 1.2em;
    text-transform: uppercase;
`
const UserName = styled.p`
    color: ${props => props.theme.colors.fg};
`
const CanYou = styled.p`
    padding: 10px 5px 0px 5px;
    font-family: ${props => props.theme.fonts.fancy};
    font-size: 2em;
    text-align: center;
`
const Span = styled.span`
    color: ${props => props.theme.colors.accent2};
    text-transform: uppercase;
`
const Footer = styled.div`
    height: 3px;
    width: 70px;
    background: #fff;
    margin: 20px auto;
`
const ToggleBtn = styled.div`
    width: 50px;
    cursor: pointer;
`
const WordToggle = styled.div``

const Spacing = styled.div`
    width: 50px;
`

const Index = () => {

    const [showWord, setShowWord] = useState(false);

    return (
        <Wrapper>
            <PhoneWrap>
                <Notch />
                <Word>
                    <Spacing />
                    <WordToggle>{ showWord ? 'Snow' : '----' }</WordToggle>
                    <ToggleBtn onClick={() => setShowWord(!showWord)}>
                        { showWord ? 
                            <EyeSlash size={24} color="#111" /> :
                            <Eye size={24} color="#111" />
                        }
                    </ToggleBtn>
                </Word>
                <CanYou>
                    Can you <Span>guess</Span> the word?
                </CanYou>
                <UserWords>
                    <UserWordWrapper>
                        <UserWord>
                            White
                        </UserWord>
                        <UserName>
                            Rick
                        </UserName>
                    </UserWordWrapper>
                    <UserWordWrapper>
                        <UserWord>
                            Cold
                        </UserWord>
                        <UserName>
                            Morty
                        </UserName>
                    </UserWordWrapper>
                    <UserWordWrapper>
                        <UserWord style={{ textAlign: 'right' }}>
                            Fall
                        </UserWord>
                        <UserName>
                            Beth
                        </UserName>
                    </UserWordWrapper>
                    <UserWordWrapper>
                        <UserWord>
                            Winter
                        </UserWord>
                        <UserName>
                            Summer
                        </UserName>
                    </UserWordWrapper>
                    <UserWordWrapper>
                        <UserWord>
                            ----
                        </UserWord>
                        <UserName>
                            Jerry
                        </UserName>
                    </UserWordWrapper>
                </UserWords>
                <Footer />
            </PhoneWrap>
        </Wrapper>
    )
}

export default Index;