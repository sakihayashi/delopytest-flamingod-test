import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import NewsDigest from '../components/NewsDigest'
import './HomePage.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, posts, postTechInfo, postGatsby }) => {

  let postArray = posts.edges.map((post) => {
       
    return (
      <NewsDigest {...post}/>
    )
  })

  
  let postArrayGatsby = postGatsby.edges.map((post) => {
    
        return (
          <NewsDigest {...post}/>
        )

    
  })

  let postArrayTechInfo = postTechInfo.edges.map((post) => {
       
        return (
          <NewsDigest {...post}/>
        )
  })

  return (
    <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    <section className="section">
      <div className="container">New ブログ
      <ul className="post-list">{postArray}</ul>
      </div>
    </section>
    <section className="section">
      <div className="container">New Gatsby ブログ
      <ul className="post-list">{postArrayGatsby}</ul>
      </div>
    </section>
    <section className="section">
      <div className="container">New アメリカテクノロジーブログ
      <ul className="post-list">{postArrayTechInfo}</ul>
      </div>
    </section>
    
  </main>
  )

}

// Export Default HomePage for front-end
const HomePage = ({ data: { data, posts, postTechInfo, postGatsby } }) => {
  
  return (
    <Layout meta={data.frontmatter.meta || false}>
      
      <HomePageTemplate {...data} {...data.frontmatter} body={data.html} posts={posts} postTechInfo={postTechInfo} postGatsby={postGatsby} />
      
    </Layout>
  )

}

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    data: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
          internal{
            content
          }
        }
      }
    }
    postTechInfo: allMarkdownRemark(
      filter: {frontmatter: {categories: {elemMatch: {category: {eq: "Tech Info"}}}}, 
      fields: {contentType: {eq: "posts"}}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          internal {
            content
          }
          frontmatter {
            categories {
              category
            }
            featuredImage
            date
            title
          }
        }
      }
    }
    postGatsby: allMarkdownRemark(
      filter: {frontmatter: {categories: {elemMatch: {category: {eq: "Gatsbyチュートリアル"}}}}, 
      fields: {contentType: {eq: "posts"}}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          internal {
            content
          }
          frontmatter {
            categories {
              category
            }
            featuredImage
            date
            title
          }
        }
      }
    }
  }
`


