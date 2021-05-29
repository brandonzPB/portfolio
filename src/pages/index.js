import React from "react"

import NavLayout from '../components/NavLayout';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/Header';
import Body from '../components/Body';

const IndexPage = () => (  
  <NavLayout>
    <Layout>
      <SEO title="Brandon Zirulnikoff | Software Developer" />
      <Header />
      <Body />
    </Layout>
  </NavLayout>
)

export default IndexPage
