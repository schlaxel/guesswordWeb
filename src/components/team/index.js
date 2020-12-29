import React from 'react';
import styled from 'styled-components';
import Member from './member';
import alex from '../../img/alex.jpg';
import bernd from '../../img/bernd.jpg';

const Wrapper = styled.div`
    padding: 20px 10px;
    max-width: 500px;
    margin: auto;
`
const Heading = styled.h1`
    font-family: ${props => props.theme.fonts.bold};
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
`
const TeamWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const teamArr = [
    { name: 'Alex Kiefer', title: 'CEO (Development)', img: alex },
    { name: 'Markus Plankert', title: 'CMO (Marketing)', img: bernd }
];

const Team = () => {
    console.log(teamArr);
    return (
        <Wrapper>
            <Heading>The team:</Heading>
            <TeamWrapper>
            { 
                teamArr.map(member => (
                    <Member member={member} />
                ))
            }
            </TeamWrapper>
        </Wrapper>
    )
};

export default Team;