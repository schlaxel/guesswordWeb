import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 0 0 10px 0;
    overflow: hidden;
    border-radius: 7px;
    background: ${props => props.theme.colors.bg2};
    max-width: 150px;
`
const Img = styled.img`
    width: 100%;
    height: auto;
`

const Name = styled.h1`
    font-family: ${props => props.theme.fonts.normal};
    font-size: 1em;
    text-align: center;
    font-weight: 700;
    color: ${props => props.theme.colors.accent2};
`
const Title = styled(Name)`
    color: ${props => props.theme.colors.fg};
    font-size: 0.8em;
`

const Member = ({ member }) => {
    console.log(member);
    return (
    <Wrapper>
        <Img src={member.img} alt={member.name} />
        <Name>{member.name}</Name>
        <Title>{member.title}</Title>
    </Wrapper>
    )
};

export default Member;