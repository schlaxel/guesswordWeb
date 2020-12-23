import React from 'react';
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import Header from '../components/header';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`
const Redirect = styled.p`
    font-family: ${props => props.theme.fonts.normal};
    font-size: 24px;
`
const GetIt = styled(Redirect)`
    font-size: 20px;
`

export default function Link() {
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    const id = parsed.id;

    window.location = `guessword://?gId:${id}`;

    return (
      <SiteWrapper>
        <Wrapper>
            <Redirect>
                You are being redirected...
            </Redirect>
            <GetIt>
                If you don't have the app get it:
            </GetIt>
            <Header />
        </Wrapper>
      </SiteWrapper>
    )
}
