import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const PressPageTemplate = ({
  title,
  content,
  contentComponent,
  items
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="primary-content">
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
      <div className="ui cards top-content-padding">
        {items.length > 0 &&
          items.map(item => (
            <div className="card">
              <div className="image">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Img fluid={item.image.childImageSharp.fluid} />
                </a>
              </div>
              <div className="content">
                <div className="header">{item.publication}</div>
                <div className="meta">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.url}
                  </a>
                </div>
                <div className="description">{item.text}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

PressPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  items: PropTypes.array
};

const PressPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PressPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        items={post.frontmatter.items}
      />
    </Layout>
  );
};

PressPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PressPage;

export const PressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        items {
          publication
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          url
          text
        }
      }
    }
  }
`;
