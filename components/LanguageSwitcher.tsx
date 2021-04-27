import { useRouter } from 'next/router';
import { useState } from 'react';
import cookie from 'js-cookie';
import styles from '../styles/LanguageSwicther.module.css';

function LanguageSwitcher() {
  const router = useRouter();
  const { pathname: currentRoute } = router;
  const [isChecked, setIsChecked] = useState(cookie.get('enLanguageSelected') !== undefined);

  const handleChange = (event) => {
    const checkedValue: boolean = event.target.checked;

    if (checkedValue) {
      setIsChecked(true);
      cookie.set('enLanguageSelected', checkedValue);
    } else {
      setIsChecked(false);
      cookie.remove('enLanguageSelected');
    }
    router.push(currentRoute, currentRoute, { locale: checkedValue ? 'es' : 'en' });
  };

  return (
    <label className='flex items-center relative w-max cursor-pointer select-none'>
      <input type='checkbox' onClick={handleChange} defaultChecked={isChecked} className={`${styles.input} appearance-none transition-colors cursor-pointer w-14 h-5 rounded-full bg-blue-500 checked:bg-gray-400`} />
      <span className='absolute font-bold text-xs uppercase right-2 text-white'> EN </span>
      <span className='absolute font-bold text-xs uppercase right-8 text-white'> ES </span>
      <span className={`${styles.span} w-7 h-5 right-7 absolute rounded-full transform transition-transform bg-gray-200`} />
    </label>
  );
}

export default LanguageSwitcher;
