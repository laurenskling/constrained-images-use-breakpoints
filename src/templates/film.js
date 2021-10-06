import React from 'react';
import { graphql } from 'gatsby';


export const pageQuery = graphql`
  query FilmById($id: ID!) {
    swapi {
      film(id: $id) {
        id
        title
      }
    }
  }
`;

const Film = ({ data, errors, ...props }) => {
  console.log(data, errors, props);

  if (errors) {
    return (
      <div>
        <h1>Errors:</h1>
        <ul>
          {errors.map(({ message, path }) => (
            <li key={message}>{message} (at {path.join('.')})</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Film:</h1>
      <h2>{data?.swapi?.film?.title}</h2>
    </div>
  );
};

export default Film;
