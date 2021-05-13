import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { v4 as uuid } from 'uuid';
import PostPreview from './PostPreview';

export default function TagIndex({ data }) {
  const [currentTag, setCurrentTag] = useState({ title: '' });

  // reduce data to map of tags
  const tagMap = data.allMarkdownRemark.edges.reduce((map, {node}) => {
    for (const index in node.frontmatter.tags) {
      const tag = node.frontmatter.tags[index];
      if (!(tag in map)) map[tag] = tag;
    }
    return map;
  }, {});

  let tagArr = [];

  // push each tag to tagArr
  for (const tag in tagMap) {
    tagArr.push(tag);
  }

  tagArr = tagArr.sort((a, b) => a - b);

  const [taggedPosts, setTaggedPosts] = useState({
    collection: data.allMarkdownRemark.edges.map(({ node }) => {
      return { ...node, }
    }),
    updated: false,
    components: []
  });

  useEffect(() => {
    // no tag change ("null" case)
    if (taggedPosts.updated) return;

    // no tag (reset to all posts)
    if (!currentTag.title.trim()) {
      return setTaggedPosts({
        ...taggedPosts, 
        collection: data.allMarkdownRemark.edges.map(({ node }) => {
          return { ...node, }
        }),
        updated: true
      });
    }

    // filter data down to array of posts with current tag
    const filteredPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
      return node.frontmatter.tags.indexOf(currentTag.title) > -1;
    });

    console.log('filteredPosts', filteredPosts);

    const components = filteredPosts.map(post => {
      console.log('post', post);
      // create content preview by getting slice of post HTML
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

    console.log('components', components);
    
    // set taggedPosts to filtered array
    return setTaggedPosts({
      ...taggedPosts,
      collection: filteredPosts.slice(),
      updated: true,
      components: components.slice()
    });
  }, [currentTag]);

  // UPDATE TAG STATE
  const updateTagState = (tag) => {
    setCurrentTag({ ...currentTag, title: tag });
    setTaggedPosts({ ...taggedPosts, updated: false });
  }

  const TagComponents = tagArr.map((tag, index) => (
    <li key={index} className="tag-list-item">
      <span className="tag-list-text" onClick={() => updateTagState(tag)}>
        #{tag}
      </span>
    </li>
  ));

  return (
    <div className="blog-posts">
      <Helmet title={`BZ Learning | Tags`} />
      
      <div id="all-tags__container">{TagComponents}</div>

      <div id="all-tagged-posts__container">
        <span id="no-tag-text" style={{ display: currentTag.title.trim() ? 'none' : 'block' }}>
          Click on a tag to filter all the posts!
        </span>

        {taggedPosts.components}
      </div>
    </div>
  )
}
