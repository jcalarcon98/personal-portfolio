import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className='h-screen xl:flex xl:flex-row-reverse'>
    <div className='w-full'>
      <div className='h-10 fixed w-full top-0 xl:static'>
        <Navbar />
      </div>
      <div className=''>
        {
          children
        }
      </div>
    </div>
    <div className='h-14 fixed w-full bottom-0 xl:static xl:h-screen xl:w-72'>
      <Sidebar />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
