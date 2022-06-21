// import { useEffect } from 'react';
// import { client } from './lib/apollo';
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);

  // How to request graphQL with useEffect
  // useEffect(() => {
  //   client
  //     .query({ query: GET_LESSONS_QUERY })
  //     .then((response) => console.log(response.data));
  // }, []);

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
