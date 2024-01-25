import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import PostTime from '../../Main/List/Post/PostTime';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? (
        comments.map((item) => item.body && (
          <li className={style.item} key={item.id}>
            <Text As='h3' className={style.author} size={18} tsize={22}>
              {item.author}
            </Text>
            <Text As='p' className={style.comment} size={16} tsize={18}>
              {item.body.replaceAll(`&gt;`, ' ')}
            </Text>
            <Text As='p' className={style.comment} size={12} tsize={16}>
              Кол-во просмотров -  {item.ups}
            </Text>

            <PostTime date={item.created} />
          </li>
        ))
      ) : (
      <h3>Нет комментариев</h3>
      )}
  </ul>
);

Comments.propTypes = {
  data: PropTypes.array,
  comments: PropTypes.array,
};

