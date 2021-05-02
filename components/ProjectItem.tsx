/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import PropTypes from 'prop-types';
import { FiGithub, FiFolder } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectItem = ({
  title,
  description,
  stack,
  type,
  repoUrl = '',
  demoUrl = '',
}) => {

  console.log('Hello');

  return (
    <div className='group rounded-sm flex flex-col justify-between bg-gray-700 w-80 h-72 p-4 py-8'>
      <div className='flex justify-between items-center'>
        <FiFolder className='text-4xl text-blue-500' />
        <div className='flex w-1/5 justify-between'>
          <FiGithub />
          <BiLinkExternal />
        </div>
      </div>

      <div className='font-custom'>
        <h3 className='text-lg font-semibold mb-2 group-hover:text-blue-500'>{title}</h3>
        <p className='text-sm font-medium'>
          {description}
        </p>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='font-custom'>
          {
            stack.map((stackItem, index) => (
              <span key={index} className='text-xs mr-2'>
                {stackItem}
              </span>
            ))
          }
        </div>

        <div className='text-xs font-semibold rounded-lg px-2 bg-blue-500'>
          { type }
        </div>
      </div>
    </div>
  );
};

ProjectItem.defaultProps = {
  repoUrl: '',
  demoUrl: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};

export default ProjectItem;
