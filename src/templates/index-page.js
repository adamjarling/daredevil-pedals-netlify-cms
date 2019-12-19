import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PedalsRoll from "../components/PedalsRoll";

export const IndexPageTemplate = ({ title, videoUrl, mainpitch }) => (
  <section className="primary-content">
    <div className="ui two column stackable grid">
      <div className="ten wide column">
        <div className="embed-container">
          <iframe
            width="853"
            height="480"
            frameBorder="0"
            allowFullScreen=""
            src={videoUrl}
          ></iframe>
        </div>
      </div>
      <div className="six wide column">
        <h2>{mainpitch.title}</h2>
        <p>{mainpitch.description}</p>

        <div className="block-section">
          <Link to="/" className="link-large">
            <i>DaredevilPedals.com</i>
          </Link>
        </div>
      </div>
    </div>
    <PedalsRoll />
  </section>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  videoUrl: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        videoUrl={frontmatter.videoUrl}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        videoUrl
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
