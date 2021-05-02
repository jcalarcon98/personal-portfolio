import { useState } from 'react';
import cookie from 'js-cookie';

const useScroll = () => {
  const scroll = cookie.get('scroll');
  let currentScrollPosition = 0;

  if (scroll) {
    currentScrollPosition = parseInt(scroll, 10);
  }

  const [scrollYPosition, setScrollPosition] = useState(currentScrollPosition);

  const handleScroll = (scrollPosition: number) => {
    cookie.set('scroll', scrollPosition);
    setScrollPosition(scrollPosition);
  };

  const discardScroll = () => {
    cookie.remove('scroll');
    setScrollPosition(0);
  };

  return { scrollYPosition, handleScroll, discardScroll };
};

export default useScroll;
