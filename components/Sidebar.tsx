import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import LanguageSwitcher from './LanguageSwitcher';

const Sidebar = () => {
  const sideBarValue = 'Profile';

  return (
   

    <div className='bg-gray-800 lg:flex lg:flex-col lg:w-72 lg:justify-between'>
      {/* Icon */}
      <div className='hidden lg:flex lg:justify-center mt-5'>
        <p className='font-bold text-2xl text-gray-200'>Jean Carlos Alarcón</p>
      </div>
      {/* Actions */}
      <LanguageSwitcher />
      <div className='w-full h-12 flex lg:h-auto lg:flex-col lg:items-start lg:justify-items-start'>
        <a href='https://github.com' className='flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500'>
          <div className='text-center flex flex-col lg:flex-row lg:items-center'>
            <span className='block h-8 text-2xl'>
              <i className='mdi mdi-newspaper-variant-outline' />
            </span>
            <span className='block text-xs lg:text-lg lg:ml-2'>Today</span>
          </div>
        </a>
        <a href='https://github.com' className='flex flex-grow items-center justify-center p-2 text-gray-200 hover:text-blue-500'>
          <div className='text-center flex flex-col lg:flex-row lg:items-center'>
            <span className='block h-8 text-2xl'>
              <i className='mdi mdi-apps' />
            </span>
            <span className='block text-xs lg:text-lg lg:ml-2'>Categories</span>
          </div>
        </a>
        <a href='https://github.com' className='flex flex-grow items-center justify-center p-2 text-gray-200 hover:text-blue-500'>
          <div className='text-center flex flex-col lg:flex-row lg:items-center'>
            <span className='block h-8 text-2xl'>
              <i className='mdi mdi-star-outline' />
            </span>
            <span className='block text-xs lg:text-lg lg:ml-2'>Favorites</span>
          </div>
        </a>
        <a href='https://github.com' className='flex flex-grow items-center justify-center p-2 text-gray-200 hover:text-blue-500'>
          <div className='text-center flex flex-col lg:flex-row lg:items-center'>
            <span className='block h-8 text-2xl'>
              <i className='mdi mdi-magnify' />
            </span>
            <span className='block text-xs lg:text-lg lg:ml-2'>Search</span>
          </div>
        </a>
      </div>
      {/* Social media */}
      <div className='hidden text-blue-500 mb-5 lg:flex lg:flex-row lg:justify-evenly'>
        <a href='www.github.com' className='text-3xl'>
          <AiFillGithub />
        </a>
        <a href='www.github.com' className='text-3xl'>
          <AiFillLinkedin />
        </a>
        <a href='www.github.com' className='text-3xl'>
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
