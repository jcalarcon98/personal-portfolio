import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import ProjectItem from '../components/ProjectItem';

const ProjectsPage = () => {
  console.log('Hello world');

  return (
    <div className='border-2 border-purple-700 text-white p-4 mb-12'>
      <div className='flex flex-row items-center mb-4'>
        <p className='flex font-custom text-lg font-semibold text-white md:text-2xl'>
          Proyectos
        </p>
        <span className='ml-2 w-2/5 h-custom bg-blue-500' />
      </div>
      <h3 className='font-custom text-sm mb-4'>Algunas proyectos que he realizado:</h3>
      <div className='border-2 border-red-700 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:h-4/5 2xl:w-4/5'>
        <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
        <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
        <ProjectItem title='Countries App' description='This is a countries application builded with ReactJS, HTML and CSS' stack={['ReactJs', 'HTML', 'CSS']} type='Backend' />
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
