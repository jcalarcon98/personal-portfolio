import cookie from 'js-cookie';

const removeCookie = (cookieName: string) => {
  const allScrollCokies = ['about_scroll'];
  allScrollCokies.forEach((cookieToDelete) => cookieToDelete !== cookieName && cookie.remove(cookieToDelete));
};

export default removeCookie;
