import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HiPuzzle } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';

import MyIcon from './MyIcon';

const PostPreview = ({ post, inTags = false, setTag, }) => {
  const myRef = useRef(false);

  useEffect(() => {
    return () => {
      myRef.current = false;
    }
  }, []);

  return (
    <PostPreviewContainer>
      <PostLink to={post.path}>{post.title}</PostLink>
      
      <PostInfo>
        Posted by Brandon&nbsp;
        <MyIcon />
        &nbsp;on {post.date}
      </PostInfo>

      <TagContainer>
        {
          inTags
            ? <PuzzlePieces>
              {
                post.tags.map((tag, idx) => {
                  return (
                    <TagLinkContainer key={idx}>
                      <HiPuzzle id="puzzle" />
                      <ActiveTag onClick={() => setTag(tag)}>{tag}</ActiveTag>
                    </TagLinkContainer>
                  )
                })
              }
            </PuzzlePieces>
            : <PuzzlePieces>
              {
                post.tags.map((tag, idx) => {
                  return (
                    <TagLinkContainer key={idx}>
                      <HiPuzzle id="puzzle" />
                      <TagLink to="/tags">{tag}</TagLink>
                    </TagLinkContainer>
                  )
                })
              }
            </PuzzlePieces>
        }
      </TagContainer>

      <ContentPreviewContainer>
        {post.excerpt}
      </ContentPreviewContainer>
    </PostPreviewContainer>
  )
}

export default PostPreview;

const PostPreviewContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 60%;
  text-align: left;
  margin: 2rem auto;
  height: auto;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  font-size: 2.25rem;
  border-bottom: 2px solid #0070B7;
  color: #0070B7;
  margin: 1rem auto;
  font-family: 'Roboto', sans-serif;
  transition: border-bottom 0.2s ease;

  &:link, &:visited {
    color: #0070B7;
  }

  &:hover {
    border-bottom: none;
    color: #95BCDE;
  }
`;

const PostInfo = styled.span`
  display: block;
  margin: 0.5rem auto;
`;

const TagContainer = styled.div`
  display: block;
  margin: 1rem auto;
`;

const PuzzlePieces = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
`;

const TagLinkContainer = styled.div`
  border: 1px solid #0070b7;
  border-radius: 5px;
  padding: 0.25rem 0;
  text-align: center;
  width: 7rem;

  &:hover {
    color: #5ED3F3;
    border-color: #5ED3F3;
  }

  #puzzle {
    font-size: 0.75rem;
    color: #0070b7;
  }

  #puzzle:hover {
    color: #5ed3f3;
  }
`;

const ActiveTag = styled.span`
  text-decoration: none;
  color: #0070b7;
  font-size: 0.75rem;
  margin: 0 0.25rem;

  &:hover {
    color: #5ED3F3;
  }
`;

const TagLink = styled(Link)`
  text-decoration: none;
  color: #0070b7;
  font-size: 0.75rem;
  margin: 0 0.25rem;

  &:active, &:link {
    color: #0070b7;
  }

  &:hover {
    color: #5ED3F3;
  }
`;

const ContentPreviewContainer = styled.div`
  display: block;
`;
