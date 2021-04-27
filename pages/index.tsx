import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <h1 className='text-gray-100 text-2xl h-full border-2 border-red-700'>
      { t('title') }
    </h1>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});
