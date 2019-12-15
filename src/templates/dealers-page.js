import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import MarkdownContent from "../components/MarkdownContent";

export const DealersPageTemplate = ({
  title,
  international,
  domestic,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="primary-content">
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
      <div className="ui two column grid" style={{ paddingTop: "5rem" }}>
        <div className="column">
          <h2>Domestic</h2>
          <div className="ui raised segment">
            <MarkdownContent content={domestic.content} />
          </div>
        </div>
        <div className="column">
          <h2>International</h2>
          <div className="ui raised segment">
            <MarkdownContent content={international.content} />
          </div>
        </div>
      </div>
    </section>
  );
};

DealersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const DealersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DealersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        international={post.frontmatter.international}
        domestic={post.frontmatter.domestic}
        content={post.html}
      />
    </Layout>
  );
};

DealersPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default DealersPage;

export const DealersPageQuery = graphql`
  query DealersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        international {
          content
        }
        domestic {
          content
        }
      }
    }
  }
`;
