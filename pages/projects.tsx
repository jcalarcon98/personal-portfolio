import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProjectItem from '../components/ProjectItem';

const ProjectsPage = () => {
  console.log('Helloda');

  return (
    <div className='text-xl text-white h-full border-2 border-red-500'>

      <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} />

    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage']),
  },
});

export default ProjectsPage;
