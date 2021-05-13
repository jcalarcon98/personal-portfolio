import PropTypes from 'prop-types';

const ProjectItem = ({
  title,
  description,
  features,
  stack,
  type,
  repoUrl = '',
  demoUrl = '',
}) => (
  <div className='group rounded-sm flex flex-col justify-between bg-gray-300 dark:bg-gray-700 w-full p-4 py-4 xl:transition xl:duration-500 xl:transform hover:-translate-y-2 '>
    <div className='flex justify-between items-center'>
      <i className='text-4xl text-blue-500 far fa-folder' />
      <div className={`flex w-1/5 text-xl ${repoUrl !== '' && demoUrl !== '' ? 'justify-between' : 'justify-end'}`}>
        {
          repoUrl !== ''
          && (
            <a href={repoUrl} target='blank' className='hover:text-blue-500'>
              <i className='fab fa-git-alt' />
            </a>
          )
        }
        {
          demoUrl !== ''
          && (
            <a href={demoUrl} target='blank' className='hover:text-blue-500'>
              <i className='fas fa-external-link-alt' />
            </a>
          )
        }
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
              features.map(({ name, id }) => (
                <li className='text-xs' key={id}>{name}</li>
              ))
            }
          </ul>
        </div>
      )
    }

    <div className='flex flex-row justify-between items-center  mt-4'>
      <div className='font-custom w-10/12 flex flex-wrap'>
        {
          stack.map(({ name, id }) => (
            <span key={id} className='text-xs mr-2'>
              {name}
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
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  features: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};

export default ProjectItem;
