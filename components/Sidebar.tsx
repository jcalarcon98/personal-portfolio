import { useTranslation } from 'next-i18next';
import { sections } from '../api/sidebar.json';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { t } = useTranslation('sidebar');

  return (
    <div className='bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-blue-400 w-full h-full border-r lg:flex lg:flex-col lg:justify-between'>
      <div className='hidden py-2 border-b border-gray-300 dark:border-gray-800 animate-pulse-slow xl:justify-center xl:px-4 xl:flex '>
        <img src='/logo.png' alt='Personal Logo' width={40} />
      </div>
      <div className='w-full flex h-14 xl:h-auto xl:flex-col xl:items-start xl:justify-items-start'>
        {
        sections.map(({
          id,
          name,
          icon,
          url,
        }) => (<SidebarItem key={id} section={t(`${name}`)} icon={icon} url={url} />))
        }
      </div>
      <div className='hidden text-blue-500 mb-5 xl:flex xl:flex-row xl:justify-center'>
        <a href='https://github.com/jcalarcon98' target='blank' rel='noopener noreferrer' className='text-2xl mr-4'>
          <i className='fab fa-github' />
        </a>
        <a href='https://www.linkedin.com/in/jcalarcon98/' target='blank' rel='noopener noreferrer' className='text-2xl mr-4'>
          <i className='fab fa-linkedin' />
        </a>
        <a href='https://twitter.com/jcalarcon98' target='blank' rel='noopener noreferrer' className='text-2xl mr-4'>
          <i className='fab fa-twitter-square' />
        </a>
        <a href='mailto:jeancalarcon98@gmail.com' target='blank' className='text-2xl'>
          <i className='far fa-envelope-open' />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
