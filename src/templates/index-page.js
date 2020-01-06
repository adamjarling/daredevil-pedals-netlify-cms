import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PedalsRoll from "../components/PedalsRoll";

export const IndexPageTemplate = ({ title, youTubeId, mainpitch }) => (
  <section className="primary-content">
    <div className="ui two column stackable grid">
      <div className="ten wide column">
        <div className="embed-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youTubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
            allowFullScreen
            title="Daredevils homepage video"
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
  youTubeId: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        youTubeId={frontmatter.youTubeId}
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
        youTubeId
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
