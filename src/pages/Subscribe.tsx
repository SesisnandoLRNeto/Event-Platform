import { gql, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

// const CREATE_SUBSCRIBE_MUTATION = gql`
//   mutation CreateSubscriber($name: String!, $email: String!) {
//     createSubscriber(data: { name: $name, email: $email }) {
//       id
//     }
//   }
// `;

export function Subscribe() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  // const [createSubscriber, { loading }] = useMutation(
  //   CREATE_SUBSCRIBE_MUTATION
  // ); // To get data result, just increase , { data } into desestructuring declaration

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: form,
    });

    navigate('/event');
  }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='mx-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Build a {''}
            <strong className='text-blue-500'>Complete Application</strong>,
            from scratch with
            <strong className='text-blue-500'> React JS</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            In just one week you will master in practice one of the most used
            with high demand to access the best opportunities in the market.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>Sign up free</strong>
          <form
            action=''
            onSubmit={handleSubscribe}
            className='flex flex-col gap-2 w-full'
          >
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Your complete name'
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='email'
              placeholder='Type your e-mail'
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
              type='submit'
              disabled={loading}
            >
              Guarantee my spot
            </button>
          </form>
        </div>
      </div>
      <img
        src='/src/assets/code-mockup.png'
        className='mt-10'
        alt='image mockup'
      />
    </div>
  );
}
