import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useDarkMode from "use-dark-mode";

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { value } = useDarkMode();
  const profileImage = getImage(
    value ? frontmatter.profile_image_dark : frontmatter.profile_image_light
  );

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <AboutImageWrapper image={profileImage} alt="" />

        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding-top: var(--size-600);

  h2 {
    font-family: "SUIT-ExtraBold";
    background: linear-gradient(135deg, #e335ff 10.38%, #0ff 104.83%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }
`;

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  width: 600px;
`;

const AboutCopy = styled.div`
  max-width: 50ch;

  & p {
    font-size: var(--size-400);
    margin-top: 20px;
  }
`;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profile_image_light {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
        profile_image_dark {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`;
