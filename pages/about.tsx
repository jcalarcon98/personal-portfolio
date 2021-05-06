import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import TechnologieItem from '../components/TechnologieItem';
import { technologies } from '../api/technologies.json';
import useScroll from '../hooks/useScroll';
import Seo from '../components/Seo';

const AboutPage = () => {
  const { t } = useTranslation('about');
  const { scrollYPosition, discardScroll } = useScroll();

  useEffect(() => {
    discardScroll();
    window.scrollTo(0, scrollYPosition);
  }, []);

  return (
    <>
      <Seo currentPage={t('about')} />
      <div className='h-screen py-7 xl:flex xl:justify-center xl:items-center xl:px-14'>
        <div className='p-4 xl:h-4/5 2xl:px-20 2xl:w-4/5'>
          <div className='flex flex-col mb-10 text-sm h-full justify-center lg:mb-0'>
            <div className='flex flex-row items-center mb-4'>
              <p className='flex font-custom text-lg font-semibold text-gray-600 dark:text-white md:text-2xl'>
                {t('about')}
              </p>
              <span className='ml-2 w-2/5 h-custom bg-blue-500' />
            </div>

            <div className='flex flex-col xl:flex-row-reverse'>
              <div className='flex justify-center xl:w-2/5'>
                <div className='flex w-3/5 justify-center items-center lg:w-9/12'>
                  <img className='rounded-xl bg-blue-500' src='/profile.png' width={230} height={230} loading='lazy' alt='Profile' />
                </div>
              </div>
              <div className='flex flex-col justify-center text-gray-600 dark:text-white mt-2 font-custom xl:w-4/5'>
                <p className='text-sm font-medium text-justify leading-loose md:text-base'>
                  {
                    t('first_description')
                  }
                </p>
                <br />
                <p className='text-sm font-medium text-justify leading-loose md:text-base'>
                  {
                    t('second_description')
                  }
                </p>
              </div>
            </div>

            <div className='text-gray-600 dark:text-white'>
              <h3 className='text-blue-500 font-semibold mt-3 font-custom md:text-xl'>
                {`${t('tech_title')}:`}
              </h3>
              <div className='mt-4 grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-7 xl:pr-14'>
                {
                  technologies.map(({ id, image, name }) => <TechnologieItem key={id} imageName={image} name={name} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['sidebar', 'about']),
  },
});

export default AboutPage;
