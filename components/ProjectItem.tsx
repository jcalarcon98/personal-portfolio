/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import PropTypes from 'prop-types';
import { FiGithub, FiFolder } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectItem = ({
  title,
  description,
  features,
  stack,
  type,
  repoUrl = '',
  demoUrl = '',
}) => (
  <div className='group rounded-sm flex flex-col justify-between bg-gray-300 dark:bg-gray-700 w-full h-80 p-4 py-4 xl:transition xl:duration-500 hover:-translate-y-2 hover:transform '>
    <div className='flex justify-between items-center'>
      <FiFolder className='text-4xl text-blue-500' />
      <div className='flex w-1/5 text-xl justify-between'>
        <a href={repoUrl} className='hover:text-blue-500'>
          <FiGithub />
        </a>
        <a href={demoUrl} className='hover:text-blue-500'>
          <BiLinkExternal />
        </a>
      </div>
    </div>

    <div className='font-custom'>
      <h3 className='text-lg font-semibold mb-2 group-hover:text-blue-500 mt-2'>{title}</h3>
      <p className='text-sm font-medium'>
        {description}
      </p>
    </div>

    {
      features && (
        <div className='font-custom mt-3'>
          <h3 className='text-sm font-semibold text-blue-500'>Relevant Features</h3>
          <ul className='list-disc list-inside'>
            {
              features.map((currentFeature, index) => (
                <li className='text-xs' key={index}>{currentFeature}</li>
              ))
            }
          </ul>
        </div>
      )
    }

    <div className='flex flex-row justify-between items-center  mt-4'>
      <div className='font-custom w-10/12 flex flex-wrap'>
        {
          stack.map((stackItem, index) => (
            <span key={index} className='text-xs mr-2'>
              {stackItem}
            </span>
          ))
        }
      </div>

      <div className='text-xs font-semibold rounded-lg px-2 bg-blue-500 text-white'>
        {type}
      </div>
    </div>
  </div>
);

ProjectItem.defaultProps = {
  features: [],
  repoUrl: '',
  demoUrl: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};

export default ProjectItem;
