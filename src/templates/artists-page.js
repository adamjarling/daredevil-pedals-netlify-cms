import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const ArtistsPageTemplate = ({
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
      <div className="ui three column stackable equal width grid">
        {items.length > 0 &&
          items.map(item => (
            <div className="column contact-block">
              <h2>{item.title}</h2>
              <p>
                <a href={item.url} target="_blank">
                  {item.url}
                </a>
              </p>
              <Img fluid={item.image.childImageSharp.fluid} />
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

ArtistsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  items: PropTypes.array
};

const ArtistsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArtistsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        items={post.frontmatter.items}
      />
    </Layout>
  );
};

ArtistsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ArtistsPage;

export const ArtistsPageQuery = graphql`
  query ArtistsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        items {
          title
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
