import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { v4 as uuid } from 'uuidv4';
import PostPreview from './PostPreview';

export default function TagIndex({ data }) {
  const [currentTag, setCurrentTag] = useState({ title: '' });

  const [taggedPosts, setTaggedPosts] = useState([]);

  useEffect(() => {
    if (!currentTag.title.trim()) return;
  }, [currentTag]);

  const tagMap = data.allMarkdownRemark.edges.reduce((map, {node}) => {
    for (const index in node.frontmatter.tags) {
      const tag = node.frontmatter.tags[index];
      if (!(tag in map)) map[tag] = tag;
    }
    return map;
  }, {});

  let tagArr = [];

  for (const tag in tagMap) {
    tagArr.push(tag);
  }

  tagArr = tagArr.sort((a, b) => a - b);

  const TagComponents = tagArr.map((tag, index) => (
    <li key={index} className="tag-list-item">
      <span className="tag-list-text">
        <Link to={`/Learn${tag}`}>#{tag}</Link>
      </span>
    </li>
  ));

  const TaggedPostsComponents = taggedPosts.map(post => {
    const contentPreview = post.node.html.slice(8, 150) + '...';

    return (
      <PostPreview 
        title={post.node.frontmatter.title}
        date={post.node.frontmatter.date}
        path={post.node.frontmatter.path}
        tags={post.node.frontmatter.tags}
        contentPreview={contentPreview}
        key={uuid()}
      />
    )
  });

  return (
    <div className="blog-posts">
      <Helmet title={`BZ Learning | Tags`} />
      {TagComponents}
    </div>
  )
}
