import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tags from "./tags";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostList = ({ posts }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, tags, date } = frontmatter;
    const { slug } = fields;
    const Postimage = getImage(frontmatter.image);

    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        image={Postimage}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  image,
  slug,
}) => {
  return (
    <StyledPostListItem>
      <Tags tags={tags} />

      <PostListTitle>
        <Link to={slug}>{title}</Link>
      </PostListTitle>
      <GatsbyImage image={image} alt={title} 
        style={{
          layout :"fullwidth" ,
          marginTop:"auto",
          aspectRatio: 16/9,
          marginRight:"-1.5rem",
          marginLeft:"-1.5rem",
          }}/>
      <PostListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </PostListMeta>
    </StyledPostListItem>
  );
};

const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledPostListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-family: "SUIT-Bold";
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;


const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
