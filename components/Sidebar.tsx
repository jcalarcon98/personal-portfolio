import {
  AiFillGithub, AiFillLinkedin, AiFillTwitterCircle,
} from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import { useTranslation } from 'next-i18next';
import { sections } from '../api/sidebar.json';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { t } = useTranslation('sidebar');

  return (
    <div className='bg-gray-800 w-full h-full lg:flex lg:flex-col lg:justify-between'>
      <div className='hidden xl:flex xl:justify-center'>
        <p className='font-bold text-2xl text-gray-200'>Jean Carlos Alarcón</p>
      </div>
      <div className='w-full flex h-12 xl:h-auto xl:flex-col xl:items-start xl:justify-items-start'>
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
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/jcalarcon98/' target='blank' rel='noopener noreferrer' className='text-2xl mr-4'>
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/jcalarcon98' target='blank' rel='noopener noreferrer' className='text-2xl mr-4'>
          <AiFillTwitterCircle />
        </a>
        <a href='mailto:someone@yoursite.com' target='blank' className='text-2xl'>
          <MdMessage />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
