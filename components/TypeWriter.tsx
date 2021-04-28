import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypeWriter = ({ text, classElements = '' }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [text],
      typeSpeed: 60,
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
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
  classElements: PropTypes.string,
};

export default TypeWriter;
