import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <div className='bg-gray-100 dark:bg-gray-800 flex justify-between px-10 w-full py-2'>
    <LanguageSwitcher />
    <ThemeSwitcher />
  </div>
);

export default Navbar;
