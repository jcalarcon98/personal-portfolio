import PropTypes from 'prop-types';

const TechnologieItem = ({ imageName, name }) => (
  <div className='flex flex-col items-center w-12'>
    <img src={`/technologies/${imageName}.svg`} width={150} height={150} alt='Technologie' loading='lazy' />
    <span className='font-medium'>{ name }</span>
  </div>
);

TechnologieItem.propTypes = {
  imageName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologieItem;
