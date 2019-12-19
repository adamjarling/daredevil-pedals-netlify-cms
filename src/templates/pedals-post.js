import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const PedalsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  price,
  payPal,
  media,
  pedalimage,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="primary-content">
      <div className="ui basic clearing segment">
        <h1>{title}</h1>
        <Img
          className="ui big right floated image"
          fluid={pedalimage.childImageSharp.fluid}
        />
        <PostContent content={content} />
        <h2 className="ui header">
          Price: <br />
          <i>{price}</i>
        </h2>

        <div className="paypal-embed-wrapper">
          <HTMLContent content={payPal} />
        </div>

        <div className="share-wrapper">
          <div className="shareThisWrapper gradient">
            <span>Share This:</span>
            <a href="" target="_blank">
              <i className="twitter square icon"></i>
            </a>
            <a href="" target="_blank">
              <i className="facebook square icon"></i>
            </a>
            <a href="" target="_blank">
              <i className="google icon"></i>
            </a>
          </div>
          <img className="squigly" />
        </div>
      </div>

      <div className="ui basic segment">
        <div className="pedal-video-wrapper cent">
          {media.map((item, i) => (
            <HTMLContent key={i} content={item.mediaItem} />
            // Note: These classes added to above element will make videos
            // 100% width: "pedal-video embed-container"
          ))}
        </div>
      </div>
    </section>
  );
};

PedalsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const PedalsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PedalsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        price={post.frontmatter.price}
        payPal={post.frontmatter.payPal}
        pedalimage={post.frontmatter.pedalimage}
        media={post.frontmatter.media}
        helmet={
          <Helmet titleTemplate="%s | Pedal">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

PedalsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default PedalsPost;

export const pageQuery = graphql`
  query PedalsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        templateKey
        price
        payPal
        pedalimage {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        media {
          mediaItem
        }
      }
    }
  }
`;
