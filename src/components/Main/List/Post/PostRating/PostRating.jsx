import {DeleteButton} from './DeleteButton/DeleteButton';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {usePost} from '../../../../../hooks/usePost';
import {postContext} from '../../../../../context/postContext';

export const PostRating = ({ups}) => {
  const [postData] = usePost(postContext);
  return (
    <div className={style.rating}>
      <DeleteButton/>
      <button className={style.up} aria-label='Повысить рейтинг'/>
      <Text As='p' size={18} tsize={20} className={style.ups}>
        {postData.ups}
      </Text>
      <button className={style.down} aria-label='Понизить рейтинг'/>
    </div>
  );
};

PostRating.propTypes = {
  ups: PropTypes.number,
};
