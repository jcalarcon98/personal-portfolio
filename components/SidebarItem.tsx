import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarItem = ({ section, icon, url }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url}>
      <a className={`${pathname === url ? 'border-t-2 border-blue-500 text-blue-500 lg:border-t-0 lg:border-l-2' : ''}  flex flex-grow items-center justify-center lg:mb-4 lg:pl-4 text-white hover:text-blue-500`}>
        <div className='text-center flex flex-col lg:flex-row lg:items-center'>
          <span className='block h-8 text-2xl'>
            <i className={icon} />
          </span>
          <span className='block text-xs font-custom lg:text-lg lg:font-medium lg:ml-2'>{section}</span>
        </div>
      </a>
    </Link>
  );
};

SidebarItem.propTypes = {
  section: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SidebarItem;
