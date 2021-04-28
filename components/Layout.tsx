import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children } : { children: React.ReactNode }) => (
  <div className='flex flex-col-reverse h-screen bg-gray-900 lg:flex-row'>
    <Sidebar />
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <div className='h-full p-4 lg:p-32 overflow-y-auto'>
        {
          children
        }
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
