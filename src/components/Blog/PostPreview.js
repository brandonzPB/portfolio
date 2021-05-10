import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostPreview = ({ title, date, tags, path, contentPreview }) => {
  return (
    <div>
      <Link to={path}>{title}</Link>
      
      <span>
        Posted by&nbsp;
        <Link to="/learn/Brandon">Brandon</Link>
        &nbsp;on {date}
      </span>

      <TagContainer>
        {tags}
      </TagContainer>

      <ContentPreviewContainer>
        {contentPreview}
      </ContentPreviewContainer>
    </div>
  )
}

export default PostPreview;

const TagContainer = styled.div``;

const ContentPreviewContainer = styled.div``;
