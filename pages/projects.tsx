import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useRef } from 'react';
import useScroll from '../hooks/useScroll';
import removeCookie from '../utils/removeCookie';
import MemorizeProjectItem from '../components/MemorizeProjectItem';

const ProjectsPage = React.memo(() => {
  const cookieName = 'project_scroll';
  // const { t } = useTranslation('about');

  removeCookie(cookieName);
  const { scrollYPosition, handleScroll } = useScroll(cookieName);
  const scrolledDiv = useRef(null);

  useEffect(() => {
    scrolledDiv.current.scrollTo(0, scrollYPosition);
  }, []);

  return (
    <div className='text-xl flex flex-col scrollbar overflow-y-auto xl:justify-center items-center  text-white h-full py-3' ref={scrolledDiv} onScroll={() => handleScroll(scrolledDiv.current.scrollTop)}>
      <div className='border-green-400 border-2 s xl:w-9/12 mb-10'>
        <div className='flex flex-row items-center mb-4'>
          <p className='flex font-custom text-lg font-semibold text-white md:text-2xl'>
            Proyectos:
          </p>
          <span className='ml-2 w-2/5 h-custom bg-blue-500' />
        </div>
        <h3 className='font-custom text-sm'>Algunas proyectos que he realizado:</h3>
        <div className='xl:h-4/5 2xl:w-4/5 my-2'>
          <MemorizeProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
          <MemorizeProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
          <MemorizeProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
        </div>
      </div>
    </div>
  );
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage']),
  },
});

export default ProjectsPage;
