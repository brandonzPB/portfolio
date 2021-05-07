import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostPreview = ({ title, date, tags, path }) => {
  return (
    <div>
      <Link to={path}>{title}</Link>
    </div>
  )
}

export default PostPreview;
