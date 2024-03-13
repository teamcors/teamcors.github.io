import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostList from "../components/post-list";
import styled from "styled-components";
import StyledLink from "../components/styled-link";

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />

      <PostList posts={posts} />
      <StyledLink
        css={`
          display: block;
          margin-top: var(--size-800);
          margin-bottom: var(--size-800);
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        `}
        to="/blog"
      >
        View All posts
      </StyledLink>
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  align-items: flex-start;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
  margin-bottom: 120px;
  text-align: left;
  font-size: var(--size-700);

  h1 {
    font-family: "Montserrat-SemiBold";
    text-transform: uppercase;
  }

  & p {
    text-transform: capitalize;
  }

  @media screen and (max-width: 700px) {
    & h1 {
    }
  }
`;

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
