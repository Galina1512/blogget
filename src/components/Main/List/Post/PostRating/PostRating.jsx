import {DeleteButton} from './DeleteButton/DeleteButton';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostRating = ({ups}) => (
  <div className={style.rating}>
    <DeleteButton/>
    <button className={style.up} aria-label='Повысить рейтинг'/>
    <Text As='p' size={18} tsize={20} className={style.ups}>
      {ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг'/>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
};
