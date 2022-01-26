import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DynamicImage = (props) => {
  const { src, alt } = props;
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const edge = data.allFile.edges.find(({ node }) => src === node.relativePath);
  const image = getImage(edge.node.childImageSharp.gatsbyImageData);

  return <>{edge && <GatsbyImage image={image} alt={alt} {...props} />}</>;
};

export default DynamicImage;
