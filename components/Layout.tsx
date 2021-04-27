import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children } : { children: React.ReactNode }) => (
  <div className='flex flex-col-reverse bg-gray-900 h-screen justify-between lg:flex-row'>
    <Sidebar />
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <div className='h-full p-4 lg:p-32'>
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
