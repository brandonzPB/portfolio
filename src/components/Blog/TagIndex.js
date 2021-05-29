import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { v4 as uuid } from 'uuid';
import { HiPuzzle } from 'react-icons/hi';

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

  // sort tags in alphabetical order; not many tags,
  // so optimization is not an issue here
  tagArr = tagArr.sort((a, b) => a - b);

  const [taggedPosts, setTaggedPosts] = useState({
    collection: data.allMarkdownRemark.edges.map(({ node }) => {
      return { ...node, }
    }),
    updated: false,
    components: []
  });

  // UPDATES ON TAG FILTER UPDATE
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

    const components = filteredPosts.map(post => {
      // create content preview by getting slice of post HTML
      const contentPreview = post.node.html.slice(3, 150) + '...';
      const reg = new RegExp('<br>', 'g');
      const excerpt = contentPreview.replace(reg, ' ');

      // reduce PostPreview props
      const postObj = {
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        path: post.node.frontmatter.path,
        tags: post.node.frontmatter.tags,
        excerpt: excerpt,
      }
  
      return (
        <PostPreview 
          post={postObj}
          key={uuid()}
          inTags={true}
          setTag={updateTagState}
        />
      )
    });
    
    // set taggedPosts to filtered array
    return setTaggedPosts({
      ...taggedPosts,
      collection: filteredPosts.slice(),
      updated: true,
      components: components.slice()
    });
  }, [currentTag, taggedPosts, setTaggedPosts]);

  // UPDATE TAG STATE
  const updateTagState = useCallback((tag) => {
    setCurrentTag({ ...currentTag, title: tag });
    setTaggedPosts({ ...taggedPosts, updated: false });
  }, [setTaggedPosts, setCurrentTag]);

  // TAG COMPONENTS
  const TagComponents = tagArr.map((tag, index) => (
    <li key={index} className="tag-list-item">
      <HiPuzzle id="puzzle" />
      <span 
        className="tag-list-text" 
        onClick={() => updateTagState(tag)}
      >
        {tag}
      </span>
    </li>
  ));

  return (
    <TagIndexContainer>
      <Helmet title={`The Stoic Programmer | Tags`} />

      <PostHeader>
        <PostsLink to="/learn">Browse Posts</PostsLink>
      </PostHeader>
      
      <TagContentContainer>

        <NoTagText style={{ display: currentTag.title.trim() ? 'none' : 'block' }}>
          Click on a Tag to Filter the Posts!
        </NoTagText>

        <AllTags>{TagComponents}</AllTags>

        <AllTaggedPosts>
          {taggedPosts.components}
        </AllTaggedPosts>
      </TagContentContainer>
    </TagIndexContainer>
  )
}

const TagIndexContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  height: auto;
  padding: 2rem 0;
`;

const TagContentContainer = styled.div`
  margin: 2rem auto 4rem auto;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.7);
  padding-bottom: 2.5rem;
`;

const PostHeader = styled.div`
  display: block;
  fontSize: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

const PostsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid black;
  transition: border-bottom 0.3s ease 0s;
  color: black;
  text-align: center;
  font-size: 1.75rem;

  &:hover {
    color: #48CEF7;
    border-bottom: transparent;
  }
`;

const NoTagText = styled.span`
  margin: 2rem auto 0 auto;
  text-align: center;
  font-size: 1.25rem;
`;

const AllTags = styled.div`
  @keyframes jiggle {
    0% {
      transform: rotate(10deg);
    }

    20% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(10deg);
    }

    60% {
      transform: rotate(-10deg);
    }

    80% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(-10deg);
    }
  }

  max-width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  margin: 2rem auto;

  .tag-list-item {
    list-style-type: none;
    margin: 0 auto 0 3rem;
    width: 26%;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }

  .tag-list-item:hover {
    color: #828282;
  }

  #puzzle {
    color: #fecc27;
    animation: jiggle 0.5s ease-out 0s alternate once;
    background: none;
    margin-right: 0.5rem;
    margin-top: 0.75rem;
  }

  #puzzle:hover {
    animation: jiggle 0.2s;
  }
`;

const AllTaggedPosts = styled.div`
  margin: 2rem auto;
`;
