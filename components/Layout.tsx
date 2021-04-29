import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children } : { children: React.ReactNode }) => (
  <div className='flex flex-col-reverse h-screen bg-gray-900 lg:flex-row'>
    <Sidebar />
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      {
        children
      }
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
