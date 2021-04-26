import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const Layout = ({ children } : { children: React.ReactNode }) => (
  <div className='min-h-screen flex flex-col-reverse bg-gray-900 lg:flex-row'>
    <Sidebar />
    {
      children
    }
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
