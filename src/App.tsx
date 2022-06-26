// import { useEffect } from 'react';
// import { client } from './lib/apollo';
// import { gql, useQuery } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Event } from './pages/Event';
import { Router } from './Router';

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//       teacher {
//         name
//       }
//     }
//   }
// `;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // How to get data by useQuery from Apollo client
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  // How to request graphQL with useEffect
  // useEffect(() => {
  //   client
  //     .query({ query: GET_LESSONS_QUERY })
  //     .then((response) => console.log(response.data));
  // }, []);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
