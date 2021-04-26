import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function New() {
  const { t } = useTranslation('common');
  return (
    <h1 className='text-gray-100 text-2xl'>
      { t('title') }
    </h1>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});
