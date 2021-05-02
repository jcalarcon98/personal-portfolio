import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  // <div className=''>
  //   <div className='flex flex-col-reverse bg-gray-900 lg:flex-row '>
  //     <Sidebar />
  //     <div className='w-full flex flex-col'>
  //       {/* <Navbar /> */}
  //       {
  //         children
  //       }
  //     </div>
  //   </div>
  // </div>
  <div className='h-5/6 border-red-700 border-4 w-full'>
    <div className='h-10 fixed w-full top-0'>
      <Navbar />
    </div>
    <div className='mt-7 w-full border-2 border-green-600'>
      {
        children
      }
    </div>
    <div className='h-14 fixed w-full bottom-0 '>
      <Sidebar />
    </div>
  </div>


);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
