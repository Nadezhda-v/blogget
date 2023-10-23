import style from './Text.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fontWeight = 'medium',
    onClick,
  } = props;

  const classes = classNames(
    className,
    style[color],
    style[fontWeight],
    { [style.center]: center },
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
  );

  return (
    <As className={classes} href={href} onClick={onClick}>{children}</As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  center: PropTypes.bool,
  fontWeight: PropTypes.string,
  onClick: PropTypes.func,
};
