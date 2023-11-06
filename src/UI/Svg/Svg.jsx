import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const svgCache = {};

export const SvgIcon = ({ src, className }) => {
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    if (svgCache[src]) {
      setSvg(svgCache[src]);
      setIsLoaded(true);
    } else {
      fetch(src)
        .then((response) => response.text())
        .then((data) => {
          className && (
            data = data.replace('<svg', `<svg class="${className}"`));
          svgCache[src] = data;
          setSvg(data);
          setIsLoaded(true);
        })
        .catch(setIsErrored)
        .then(() => setIsLoaded(true));
    }
  }, [src]);

  return (
    <div
      className={`${isLoaded ?
        'loaded' : 'loading'} ${isErrored ? 'svgIcon--errored' : ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

SvgIcon.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

