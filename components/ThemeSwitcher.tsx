import { useTheme } from '../provider/ThemeProvider';
import styles from '../styles/ThemeSwicther.module.css';

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();

  const handleChangeInside = (event) => {
    const checkedValue: boolean = event.target.checked;
    changeTheme(checkedValue);
  };

  return (
    <label htmlFor='input' className='flex items-center relative w-max cursor-pointer select-none'>
      <input id='input' type='checkbox' onClick={handleChangeInside} defaultChecked={theme} className={`${styles.input} appearance-none transition-colors cursor-pointer w-14 h-5 rounded-full bg-blue-500 checked:bg-gray-400`} />
      <span className='absolute font-bold text-xs uppercase right-2 text-white'> 🌛 </span>
      <span className='absolute font-bold text-xs uppercase right-8 text-white'> 🌞 </span>
      <span className={`${styles.span} w-7 h-5 right-7 absolute rounded-full transform transition-transform bg-gray-200`} />
    </label>
  );
}

export default ThemeSwitcher;
