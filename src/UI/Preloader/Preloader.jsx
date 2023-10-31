import DotLoader from 'react-spinners/DotLoader';
import PropTypes from 'prop-types';

export const Preloader = ({ color, size }) =>
  <DotLoader
    color={color}
    cssOverride={{ display: 'block', margin: 'auto' }}
    size={size}
  />;

Preloader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
