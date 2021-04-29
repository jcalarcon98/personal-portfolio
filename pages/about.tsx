import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import TechnologieItem from '../components/TechnologieItem';
import { technologies } from '../api/technologies.json';
import useScroll from '../hooks/useScroll';
import removeCookie from '../utils/removeCookie';

const AboutPage = () => {
  const cookieName = 'about_scroll';
  const { t } = useTranslation('about');

  removeCookie(cookieName);
  const { scrollYPosition, handleScroll } = useScroll(cookieName);
  const scrolledDiv = useRef(null);

  useEffect(() => {
    scrolledDiv.current.scrollTo(0, scrollYPosition);
  }, []);

  return (
    <div className='p-4 xl:p-40 overflow-y-auto' ref={scrolledDiv} onScroll={() => handleScroll(scrolledDiv.current.scrollTop)}>
      <div className='flex flex-col mb-10 text-sm text-white lg:mb-0'>
        <div className='flex flex-row items-center mb-4'>
          <p className='flex font-custom text-lg font-semibold'>
            {t('about')}
          </p>
          <span className='ml-2 w-2/5 h-custom bg-blue-500' />
        </div>
        <div className='flex justify-center w-full mb-4'>
          <Image className='rounded-xl bg-blue-500' src='/profile.png' width={150} height={150} />
        </div>
        <div className='flex flex-col px-4 font-custom'>
          <p className='text-sm font-medium leading-loose '>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <p className='text-sm font-medium leading-loose '>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <p className='text-sm font-medium leading-loose '>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <h3 className='text-blue-500 font-semibold mt-3'>Technologies:</h3>
          <div className='mt-4 grid grid-cols-3 gap-10 justify-evenly justify-items-center content-evenly items-center'>
            {
              technologies.map(({ id, image, name }) => <TechnologieItem key={id} imageName={image} name={name} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['sidebar', 'about']),
  },
});

export default AboutPage;
