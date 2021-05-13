import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import ProjectItem from '../components/ProjectItem';
import useScroll from '../hooks/useScroll';
import Seo from '../components/Seo';

const ProjectsPage = () => {
  const { scrollYPosition, discardScroll } = useScroll();
  const { t } = useTranslation('projects');

  const projects: [] = t('projects', { returnObjects: true });

  useEffect(() => {
    discardScroll();
    window.scrollTo(0, scrollYPosition);
  }, []);

  return (
    <>
      <Seo currentPage={t('title')} />
      <div className='px-4 pt-12 pb-16 xl:px-40 xl:pt-44 xl:pb-10 2xl:px-60 text-gray-600 dark:text-white'>
        <div>
          <div className='flex flex-row items-center'>
            <p className='flex font-custom text-lg font-semibold  md:text-2xl'>
              {
                t('title')
              }
            </p>
            <span className='ml-2 w-2/5 h-custom bg-blue-500' />
          </div>
          <h3 className='font-custom text-sm mb-4'>{t('subtitle')}</h3>
          <div className='flex justify-center w-full'>
            <div className='w-11/12 grid grid-cols-1 gap-3 md:grid-cols-2 xl:w-full 2xl:grid-cols-3 2xl:gap-4 h-5/6'>
              {
                projects.map((
                  {
                    id,
                    stack,
                    type,
                    description,
                    title,
                    features,
                    demoUrl,
                    repoUrl,
                  },
                ) => (
                  <ProjectItem
                    key={id}
                    title={title}
                    stack={stack}
                    type={type}
                    description={description}
                    features={features}
                    demoUrl={demoUrl}
                    repoUrl={repoUrl}
                  />
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </>

  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['sidebar', 'projects']),
  },
});

export default ProjectsPage;
