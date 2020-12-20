import React from "react";
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import { graphql } from "gatsby";

const PrivacyText = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    Strong, h1 {
        font-weight: 900;
        font-size: 2em;
        padding: 20px;
    }
    p {
        padding: 10px 0;
    }
    a, h1 {
        color: ${props => props.theme.colors.accent2};
    }
    ul {
        margin: auto;
        padding: 20px;
    }
`

const Privacy = ({data}) => {
  return (
    <SiteWrapper>
        <PrivacyText dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </SiteWrapper>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/privacy-content.md/" }) {
      html
    }
  }
`

export default Privacy;
