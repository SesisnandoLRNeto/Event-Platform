import { gql, useQuery } from '@apollo/client';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

// const GET_LESSON_QUERY = gql`
//   query {
//     lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//       id
//       lessonType
//       slug
//       title
//       availableAt
//     }
//   }
// `;

// interface GetLessonsQueryResponse {
//   lessons: {
//     id: string;
//     title: string;
//     slug: string;
//     availableAt: string;
//     lessonType: 'live' | 'class';
//   }[];
// }

export function Sidebar() {
  // const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY); How to use useHooks from apollo without graph-codegen
  const { data } = useGetLessonsQuery();

  return (
    <aside className='w-[340px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Class Schedule
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            typeClass={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
}
