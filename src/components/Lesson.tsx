import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  typeClass: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, typeClass }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDataFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <a href='#'>
      <span className='text-gray-300'>{availableDataFormatted}</span>
      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='flex items-center gap-2 text-sm text-blue-500 font-medium'>
              <CheckCircle size={20} />
              Content available
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
              <Lock size={20} />
              Coming soon
            </span>
          )}
          <span className='text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold'>
            {typeClass === 'live' ? 'Live' : 'Practice Class'}
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>{title}</strong>
      </div>
    </a>
  );
}
