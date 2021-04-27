import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AboutPage = () => (
  <h1> Hello world from the about Page </h1>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage']),
  },
});

export default AboutPage;
