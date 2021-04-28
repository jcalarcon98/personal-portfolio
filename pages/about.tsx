import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div className='flex flex-col flex-none mb-8 text-white lg:mb-0'>
      <div className='flex flex-row items-center'>
        <p className='flex font-custom text-lg font-semibold'>
          { t('about') }
        </p>
        <span className='ml-2 w-2/5 h-custom bg-blue-500' />
      </div>
      <div className='flex justify-center w-full'>
        <img className='rounded-xl bg-blue-500' src='/profile.png' alt='Profile' width='180' height='180' />
      </div>
      <p className=''>
        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
        Here are a few technologies I&apos;ve been working with recently:
      </p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'sidebar', 'mainPage', 'about']),
  },
});

export default AboutPage;
