import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarItem = ({ section, icon, url }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url}>
      <a className={`${pathname === url ? 'border-t-4 border-blue-500 text-blue-500 xl:border-t-0 xl:border-l-4' : 'text-gray-600 dark:text-white'}  flex flex-grow items-center justify-center xl:mb-4 xl:pl-4 hover:text-blue-500`}>
        <div className='text-center flex flex-col xl:flex-row xl:items-center'>
          <span className='block h-8 text-xl'>
            <i className={icon} />
          </span>
          <span className='block text-xs font-custom xl:text-lg xl:font-medium xl:ml-2'>{section}</span>
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
