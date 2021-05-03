import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import useScroll from '../hooks/useScroll';

const ProjectsPage = () => {
  const { scrollYPosition, discardScroll } = useScroll();

  useEffect(() => {
    discardScroll();
    window.scrollTo(0, scrollYPosition);
  }, []);

  return (
    <div className='px-4 pt-10 pb-16 xl:px-60 xl:pt-44 xl:pb-10 text-gray-600 dark:text-white w-full'>
      <div>
        <div className='flex flex-row items-center'>
          <p className='flex font-custom text-lg font-semibold  md:text-2xl'>
            Proyectos
          </p>
          <span className='ml-2 w-2/5 h-custom bg-blue-500' />
        </div>
        <h3 className='font-custom text-sm mb-4'>Algunos proyectos que he realizado:</h3>
        <div className='flex justify-center w-full'>
          <div className='w-11/12 grid grid-cols-1 gap-3 md:grid-cols-2 xl:w-full xl:grid-cols-3 xl:gap-4 xl:h-4/5'>
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
            <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
          </div>
        </div>
      </div>

    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage']),
  },
});

export default ProjectsPage;
