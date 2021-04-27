import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  console.log('Hello');

  return (
    <div className='bg-gray-700 flex justify-between px-10 w-full h-10'>
      <LanguageSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default Navbar;
