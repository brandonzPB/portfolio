import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MyIcon from './MyIcon';

const PostPreview = ({ title, date, tags, path, excerpt }) => {

  return (
    <PostPreviewContainer>
      <PostLink to={path}>{title}</PostLink>
      
      <PostInfo>
        Posted by Brandon&nbsp;
        <MyIcon />
        &nbsp;on {date}
      </PostInfo>

      <TagContainer>
        {tags.map((tag, idx) => {
          return (
            <Tag key={idx}>{tag}</Tag>
          )
        })}
      </TagContainer>

      <ContentPreviewContainer>
        {excerpt}
      </ContentPreviewContainer>
    </PostPreviewContainer>
  )
}

export default PostPreview;

const PostPreviewContainer = styled.div``;

const PostLink = styled(Link)``;

const PostInfo = styled.span``;

const Tag = styled.span``;

const TagContainer = styled.div``;

const ContentPreviewContainer = styled.div``;
