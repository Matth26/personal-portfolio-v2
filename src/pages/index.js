import React from 'react';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { name, title, description } = data.site.siteMetadata;
  return (
    <>
      <h1 className="font-xs font-light ">{name}</h1>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
  }
`;
