import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypeWriter = ({ text, typeSpeed = 50, classElements = '' }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [text],
      typeSpeed,
      backSpeed: 50,
      autoInsertCss: true,
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className={`${classElements} `} ref={typeTarget} />
    </div>
  );
};

TypeWriter.defaultProps = {
  classElements: '',
  typeSpeed: 50,
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
  classElements: PropTypes.string,
  typeSpeed: PropTypes.number,
};

export default TypeWriter;
