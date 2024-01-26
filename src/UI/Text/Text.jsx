import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    bold,
    className,
    dateTime,
    children,
    href,
    onClick,
    center,
    medium,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style.medium]: medium},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
    style[bold],
  );

  return <As
    className={classes}
    href={href}
    onClick={onClick}
    dateTime={dateTime}
  >
    {children}
  </As>;
};

Text.propType = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  bold: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  dateTime: PropTypes.date,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  medium: PropTypes.bool,
};
