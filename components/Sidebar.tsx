import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { sections } from '../api/data.json';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { t } = useTranslation('sidebar');

  return (
    <div className='bg-gray-800 lg:flex lg:flex-col lg:w-72 lg:justify-between'>
      {/* Icon */}
      <div className='hidden lg:flex lg:justify-center mt-5'>
        <p className='font-bold text-2xl text-gray-200'>Jean Carlos Alarcón</p>
      </div>
      {/* Actions */}
      <div className='w-full h-12 flex lg:h-auto lg:flex-col lg:items-start pl-4 lg:justify-items-start'>
        {
        sections.map(({ id, name, icon }) => (<SidebarItem key={id} section={t(`${name}`)} icon={icon} />))
        }
        {/* <Image src='/inspiration.svg' width={200} height={200} /> */}
      </div>
      {/* Social media */}
      <div className='hidden text-blue-500 mb-5 lg:flex lg:flex-row lg:justify-center'>
        <a href='https://github.com/jcalarcon98' className='text-3xl mr-4'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/jcalarcon98/' className='text-3xl mr-4'>
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/jcalarcon98' className='text-3xl'>
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
