import React from "react"

import BlogLayout from "../components/BlogLayout"
import Index from './blog/index';
import SEO from "../components/seo"

const Learning = () => (  
  <BlogLayout>
    <SEO title="BZ Learning" />
    <Index />
  </BlogLayout>
)

export default Learning;
