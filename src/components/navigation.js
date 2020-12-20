import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 300px;
    margin: auto;
    padding: 50px 0 50px 0;
`
const SLink = styled(Link)`
    padding: 10px;
    background: ${props => props.theme.colors.accent2};
    color: ${props => props.theme.colors.bg};
    border-radius: 7px;
    text-decoration: none;
    font-weight: 700;
    transition: all ease-in-out 0.3s;
    &:hover {
        opacity: 0.8;
    }
`

const Navigation = () => {
    return (
        <Wrapper>
            <SLink to="/howto">
                How to play?
            </SLink>
            <SLink to="/privacy">
                Privacy Policy
            </SLink>
        </Wrapper>
    )
};

export default Navigation;
