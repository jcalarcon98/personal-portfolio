import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import TypeWriter from '../components/TypeWriter';
import Seo from '../components/Seo';

export default function Home() {
  const { t } = useTranslation('mainPage');

  return (
    <>
      <Seo currentPage={t('title')} />
      <div className='h-screen flex flex-col-reverse justify-center items-center p-4 xl:flex-row xl:px-40'>
        <div className='w-full text-gray-600 dark:text-white font-custom flex flex-col justify-center sm:w-4/5 lg:w-full xl:w-3/5 lg:mt-0'>
          <p className='text-base font-bold lg:mb-2 lg:text-lg'>{`${t('greeting')} ${String.fromCodePoint(0x1F44b)}, ${t('my_name_is')}`}</p>
          <TypeWriter text='Jean Carlos Alarcón.' classElements='text-2xl mb-1 lg:text-7xl lg:mb-4 font-bold text-blue-500' />
          <p className='text-lg lg:text-4xl mb-4 font-extrabold text-gray-600 dark:text-gray-400 uppercase'>{t('position')}</p>
          <p className='w-full text-sm font-medium mb-4 lg:mb-8 lg:w-4/5 lg:text-lg '>
            {t('description')}
          </p>
          <a href='/cv.pdf' download className='w-3/5 flex items-center justify-center border-2 h-7 text-sm mb-4 font-semibold rounded-lg border-blue-500 bg-transparent lg:w-2/5 lg:border-2 lg:h-12 xl:w-2/5 2xl:w-48 hover:text-white hover:bg-blue-500 focus:outline-none'>
            <i className='fas fa-download mr-2' />
            {t('download')}
          </a>
        </div>
        <div className='flex items-center w-32 justify-center sm:w-48 lg:justify-start  xl:w-1/5'>
          <Image className='object-fill hover:opacity-90 text-red-500' src='/sit.svg' alt='Profile' width={240} height={280} />
        </div>
      </div>

    </>

  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['sidebar', 'mainPage']),
  },
});
