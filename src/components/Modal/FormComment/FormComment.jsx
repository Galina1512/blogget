import {useSelector, useDispatch} from 'react-redux';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';
import {updateComment} from '../../../store/comment/commentAction';
import {useAuth} from '../../../hooks/useAuth.js';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
    console.log(value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        onChange={handleChange}
        value={value}
        className={style.textarea}
      >
      </textarea>
      <button onClick={handleChange} className={style.btn}>Отправить</button>
    </form>
  );
};
