import PropTypes from 'prop-types';

const TechnologieItem = ({ imageName, name }) => (
  <div className='flex flex-col justify-between items-center w-22'>
    <img className='w-14 h-14' src={`/technologies/${imageName}.svg`} alt='Technologie' loading='lazy' />
    <span className='font-medium text-sm'>{ name }</span>
  </div>
);

TechnologieItem.propTypes = {
  imageName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologieItem;
