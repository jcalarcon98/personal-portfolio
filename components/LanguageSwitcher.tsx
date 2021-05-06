import { NextRouter, useRouter } from 'next/router';
import { ChangeEvent, useEffect } from 'react';
import cookie from 'js-cookie';
import useScroll from '../hooks/useScroll';

function LanguageSwitcher() {
  const router: NextRouter = useRouter();
  const { pathname: currentRoute, locale: currentLocale } = router;

  const cookieName : string = 'language';
  const englishLocale : string = 'en';
  const spanishLocale : string = 'es';
  const savedLanguage : string = cookie.get(cookieName);

  const { handleScroll } = useScroll();

  useEffect(() => {
    if (savedLanguage) {
      router.push(currentRoute, currentRoute, { locale: savedLanguage });
    } else {
      cookie.set(cookieName, englishLocale);
    }
  }, []);

  const handleTest = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage: string = event.target.value;
    cookie.set(cookieName, selectedLanguage);
    handleScroll(window.pageYOffset);
    router.push(currentRoute, currentRoute, { locale: selectedLanguage });
  };

  return (
    <div className='relative inline-flex'>
      <svg className='w-2 h-2 absolute top-0 right-0 m-2 text-white pointer-events-none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 412 232'><path d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z' fill='#b6bbbf' fillRule='nonzero' /></svg>
      <select className='rounded-lg h-6 pl-2 pr-6 bg-gray-200 dark:bg-gray-800 focus:outline-none appearance-none' onChange={handleTest} value={currentLocale}>
        <option value={spanishLocale}>🇪🇸</option>
        <option value={englishLocale}>🇺🇸</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
