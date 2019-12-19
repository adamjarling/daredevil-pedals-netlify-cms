import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
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
    <section class="primary-content">
      <div class="ui basic clearing segment">
        <h1>{title}</h1>
        <Img
          className="ui big right floated image"
          fluid={pedalimage.childImageSharp.fluid}
        />
        <PostContent content={content} />
        <h2 class="ui header">
          Price: <br />
          <i>{price}</i>
        </h2>

        <div class="paypal-embed-wrapper">{payPal}</div>

        <div class="share-wrapper">
          <div class="shareThisWrapper gradient">
            <span>Share This:</span>
            <a href="" target="_blank">
              <i class="twitter square icon"></i>
            </a>
            <a href="" target="_blank">
              <i class="facebook square icon"></i>
            </a>
            <a href="" target="_blank">
              <i class="google icon"></i>
            </a>
          </div>
          <img class="squigly" />
        </div>
      </div>

      <div class="ui basic segment">
        <div class="pedal-video-wrapper">
          {media.map(item => (
            <div class="pedal-video embed-container">{item.mediaItem}</div>
          ))}
        </div>
      </div>

      <div class="ui basic segment">
        <div class="pedal-video-wrapper"></div>
      </div>
    </section>
    // <section className="section">
    //   {helmet || ""}
    //   <div className="container content">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
    //           {title}
    //         </h1>
    //         <p>{description}</p>
    //         <PostContent content={content} />
    //         {tags && tags.length ? (
    //           <div style={{ marginTop: `4rem` }}>
    //             <h4>Tags</h4>
    //             <ul className="taglist">
    //               {tags.map(tag => (
    //                 <li key={tag + `tag`}>
    //                   <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
