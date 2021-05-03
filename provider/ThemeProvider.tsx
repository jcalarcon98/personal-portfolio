import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import cookie from 'js-cookie';

export interface ThemeContextInterface {
  theme: boolean,
  changeTheme: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextInterface>({ theme: true, changeTheme: () => {} });
export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(cookie.get('theme') !== undefined);
  const classTheme = 'dark';

  const changeTheme = (value: boolean) => {
    const htmlClasses = document.documentElement.classList;
    if (value) {
      document.body.style.backgroundColor = '#111827';
      cookie.set('theme', value);
      htmlClasses.add(classTheme);
    } else {
      document.body.style.backgroundColor = '#f9f7f7';
      cookie.set('theme', value);
      cookie.remove('theme');
      htmlClasses.remove(classTheme);
    }
    setTheme(value);
  };

  useEffect(() => {
    const htmlClasses = document.documentElement.classList;
    if (theme) {
      document.body.style.backgroundColor = '#111827';
      htmlClasses.add(classTheme);
    } else {
      htmlClasses.remove(classTheme);
      document.body.style.backgroundColor = '#f9f7f7';
    }
  }, []);

  return (
    <ThemeContextProvider value={{ theme, changeTheme }}>
      { children }
    </ThemeContextProvider>
  );
};

export default ThemeProvider;
