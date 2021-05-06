import PropTypes from 'prop-types';
import Head from 'next/head';

const Seo = ({ currentPage }) => (
  <Head>
    <title>{`${currentPage} | Jean Carlos Alarcón `}</title>
    <meta name='description' content='Jean Carlos Alarcón Personal Portfolio' />
    <meta name='keywords' content='Ecuador, Desarrollador, Developer, HTML, ReactJS, NextJS' />
    <meta name='author' content='Jean Carlos Alarcón' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
);

Seo.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Seo;
