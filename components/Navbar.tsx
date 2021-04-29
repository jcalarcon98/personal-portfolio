import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => (
  <div className='bg-gray-700 flex justify-between px-10 py-2 w-full h-10'>
    <LanguageSwitcher />
    <LanguageSwitcher />
  </div>
);

export default Navbar;
