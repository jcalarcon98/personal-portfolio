import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => (
  <div className='bg-gray-700 flex justify-between px-10 w-full py-2'>
    <LanguageSwitcher />
    <LanguageSwitcher />
  </div>
);

export default Navbar;
