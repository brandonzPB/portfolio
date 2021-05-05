import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function TagIndex({ data }) {
  const tagMap = data.allMarkdownRemark.edges.reduce((map, {node}) => {
    for (const index in node.frontmatter.tags) {
      const tag = node.frontmatter.tags[index];
      if (!(tag in map)) map[tag] = tag;
    }
    return map;
  }, {});

  const tagArr = [];

  for (const tag in tagMap) {
    tagArr.push(tag);
  }

  const TagComponents = tagArr.map((tag, index) => (
    <li key={index} className="tag-list-item">
      <span className="tag-list-text">#{tag}</span>
    </li>
  ));

  return (
    <div className="blog-posts">
      <Helmet title={`BZ Learning | Tags`} />
      {TagComponents}
    </div>
  )
}
