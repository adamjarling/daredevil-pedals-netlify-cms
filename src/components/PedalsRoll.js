import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class PedalsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {post.frontmatter.pedalimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.pedalimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.price}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

PedalsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query PedalsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "pedals-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
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
        }
      }
    `}
    render={(data, count) => <PedalsRoll data={data} count={count} />}
  />
);
