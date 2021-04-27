/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className='flex justify-center h-full'>
      <div className=' w-4/5 h-full text-white font-custom flex flex-col justify-center'>
        <div className='w-40 mb-2 lg:w-52 lg:h-50 lg:mb-4'>
          <img className='rounded-full bg-blue-500 object-fill hover:opacity-90' src='/profile.png' alt='Profile' />
        </div>
        <p className='text-base text-white font-bold lg:mb-2 lg:text-lg'>Hi &#x1F44b; , my name is</p>
        <p className='text-2xl mb-1 lg:text-7xl lg:mb-4 font-bold text-blue-500'>Jean Carlos Alarcón.</p>
        <p className='text-lg lg:text-4xl mb-4 font-extrabold text-gray-400 uppercase'>Software Developer</p>
        <p className='w-full text-sm font-medium mb-4 lg:mb-8 lg:w-4/5  lg:text-lg '>
          I'm a Boston-based software engineer who specializes in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm an engineer at Upstatement focused on
          building accessible, human-centered products.
        </p>
        <button type='button' className='w-3/5 border-2 h-7 text-sm lg:w-1/5 lg:border-4 lg:h-12 rounded-full border-blue-500 bg-transparent hover:bg-blue-500'>DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar']),
  },
});
