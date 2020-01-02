import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

class PedalsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="ui three column center aligned stackable grid">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column" key={post.id}>
              <article>
                <div className="ui segment">
                  <Link to={post.fields.slug} className="ui fluid image">
                    <Img
                      fluid={post.frontmatter.pedalimage.childImageSharp.fluid}
                    />
                  </Link>
                  <div className="pedal-details">
                    <h3 className="ui header">{post.frontmatter.title}</h3>
                    <p className="price">{post.frontmatter.price}</p>
                    <p>
                      <Link to={post.fields.slug} className="ui button">
                        View Pedal
                      </Link>
                    </p>
                  </div>
                </div>
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
