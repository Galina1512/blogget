import style from './PostPhoto.module.css';
import PropTypes from 'prop-types';

export const PostPhoto = ({thumbnail}) =>
  <img className={style.img} src={thumbnail} alt='Здесь будет картинка'/>;

PostPhoto.propTypes = {
  thumbnail: PropTypes.string,
};


