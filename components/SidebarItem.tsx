import PropTypes from 'prop-types';

const SidebarItem = ({ section, icon }) => (
  <a href='https://github.com' className='flex flex-grow items-center justify-center p-2 text-white hover:text-blue-500'>
    <div className='text-center flex flex-col lg:flex-row lg:items-center'>
      <span className='block h-8 text-2xl'>
        <i className={icon} />
      </span>
      <span className='block text-xs font-custom lg:text-lg lg:font-medium lg:ml-2'>{ section }</span>
    </div>
  </a>
);

SidebarItem.propTypes = {
  section: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SidebarItem;
