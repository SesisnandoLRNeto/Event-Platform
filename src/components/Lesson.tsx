import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  typeClass: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, typeClass }: LessonProps) {
  const { slug: slugActived } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDataFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm"
    // { locale: ptBR }
  );

  const isActiveLesson = slugActived === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <span className='text-gray-300'>{availableDataFormatted}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson && 'bg-green-500'
        }`}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={`flex items-center gap-2 text-smfont-medium ${
                isActiveLesson && 'text-white'
              } ${!isActiveLesson && ' text-blue-500 '}`}
            >
              <CheckCircle size={20} />
              Content available
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
              <Lock size={20} />
              Coming soon
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[2px] text-white border font-bold ${
              isActiveLesson && 'border-white'
            } ${!isActiveLesson && '  border-green-300 '}}`}
          >
            {typeClass === 'live' ? 'Live' : 'Practice Class'}
          </span>
        </header>
        <strong
          className={`mt-5 block ${isActiveLesson && 'text-white'} ${
            !isActiveLesson && 'text-gray-200'
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
