import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MyIcon from './MyIcon';

const PostPreview = ({ title, date, tags, path, excerpt, inTags = false, setTag }) => {

  return (
    <PostPreviewContainer>
      <PostLink to={path}>{title}</PostLink>
      
      <PostInfo>
        Posted by Brandon&nbsp;
        <MyIcon />
        &nbsp;on {date}
      </PostInfo>

      <TagContainer>
        {}
      </TagContainer>
      {
        inTags
          ? tags.map((tag, idx) => {
            return (
              <Tag key={idx} onClick={() => setTag(tag)}>{tag}{idx < tags.length - 1 ? ', ' : ''}</Tag>
            )
          })
          : tags.map((tag, idx) => {
              return (
                <TagLink key={idx} to="/tags">{tag}{idx < tags.length - 1 ? ', ' : ''}</TagLink>
              )
            })
      }

      <ContentPreviewContainer>
        {excerpt}
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
