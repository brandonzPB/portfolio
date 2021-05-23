import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
        {}
      </TagContainer>
      {
        inTags
          ? post.tags.map((tag, idx) => {
            return (
              <Tag key={idx} onClick={() => setTag(tag)}>{tag}{idx < post.tags.length - 1 ? ', ' : ''}</Tag>
            )
          })
          : post.tags.map((tag, idx) => {
              return (
                <TagLink key={idx} to="/tags">{tag}{idx < post.tags.length - 1 ? ', ' : ''}</TagLink>
              )
            })
      }

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
  border: 2px solid black;
  width: 80%;
  text-align: left;
`;

const PostLink = styled(Link)``;

const PostInfo = styled.span`
  display: block;
`;

const Tag = styled.span``;

const TagLink = styled(Link)``;

const TagContainer = styled.div``;

const ContentPreviewContainer = styled.div``;
