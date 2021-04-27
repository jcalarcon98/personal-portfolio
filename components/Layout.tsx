import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children } : { children: React.ReactNode }) => (
  <div className='min-h-screen flex flex-col-reverse justify-between bg-gray-900 lg:flex-row'>
    <Sidebar />
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='h-full'>
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
