import React from "react";
import { gql } from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

function App() {
  const { loading, error, data} = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return(
    <div>Home</div>
  )
}
export default App;