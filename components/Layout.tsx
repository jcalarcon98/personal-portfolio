import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className='h-full xl:flex xl:flex-row-reverse'>

    <div className='h-screen w-full'>
      <div className='h-10 fixed top-0 left-0 xl:ml-56 custom_width'>
        <Navbar />
      </div>
      <div className='h-screen xl:ml-56 custom_width'>
        {
          children
        }
      </div>
    </div>

    <div className='h-14 w-full fixed bottom-0 xl:h-screen xl:w-56 xl:left-0'>
      <Sidebar />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
