import { useRouter } from 'next/router';
import Link from 'next/link';

function LanguageSwitcher() {
  const router = useRouter();
  const { locale: language, pathname: currentRoute } = router;

  return (
    <div>
      <Link href={currentRoute} locale={language === 'en' ? 'es' : 'en'}>
        <button type='button'>ES</button>
      </Link>
    </div>
  );
}

export default LanguageSwitcher;
