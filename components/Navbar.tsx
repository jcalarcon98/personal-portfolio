import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <div className='bg-gray-200 dark:bg-gray-700 xl:bg-transparent xl:dark:bg-transparent flex justify-between px-10 w-full py-2'>
    <LanguageSwitcher />
    <ThemeSwitcher />
  </div>
);

export default Navbar;
