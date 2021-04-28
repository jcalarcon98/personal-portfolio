import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProjectsPage = () => {
  console.log('Helloda');

  return (
    <h1 className='text-xl text-white'>Hello World from Projects Page</h1>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage']),
  },
});

export default ProjectsPage;
