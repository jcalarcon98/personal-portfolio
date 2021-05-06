import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useTheme } from '../provider/ThemeProvider';
import TypeWriter from '../components/TypeWriter';

const PageNotFond = () => {
  const { theme } = useTheme();
  const [picture, setPicture] = useState('');
  const { t } = useTranslation('404');

  useEffect(() => {
    setPicture(theme ? '/404-dark.svg' : '/404-light.svg');
  }, [theme]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <img className='delay-200 w-9/12 lg:w-7/12 xl:w-4/12' src={picture} alt='Not found Page' width={500} height={200} />
      <h1 className='text-xl text-center font-custom text-gray-700 dark:text-white lg:text-2xl'>
        <TypeWriter text={t('description')} typeSpeed={10} />
      </h1>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['sidebar', '404']),
  },
});

export default PageNotFond;
