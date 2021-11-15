import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const pageQuery = graphql`
  query MyQuery {
    swapi {
      allFilms {
        edges {
          node {
            title
            id
          }
        }
      }
    }
    allFile {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout:CONSTRAINED, width: 300)
          }
        }
      }
    }
  }
`;

const Films = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {data.swapi.allFilms.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/${node.id}`}>{node.title}</Link>
          </div>
        ))}
      </ul>
      <ul>
        {data.allFile.edges.map(({ node }) => (
          <div key={node.id}>
          <GatsbyImage image={getImage(node)} alt={node.name} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Films;
