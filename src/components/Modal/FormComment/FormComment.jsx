import {useContext} from 'react';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);

  return (
    <form className={style.form}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea className={style.textarea}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
