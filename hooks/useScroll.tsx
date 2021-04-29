import { useState } from 'react';
import cookie from 'js-cookie';

const useScroll = (cookieName) => {
  const scroll = cookie.get(cookieName);
  let currentScrollPosition = 0;

  if (scroll) {
    currentScrollPosition = parseInt(scroll, 10);
  } else {
    cookie.set(cookieName, currentScrollPosition);
  }

  const [scrollYPosition, setScrollPosition] = useState(currentScrollPosition);

  const handleScroll = (scrollPosition: number) => {
    cookie.set(cookieName, scrollPosition);
    setScrollPosition(scrollPosition);
  };

  return { scrollYPosition, handleScroll };
};

export default useScroll;
