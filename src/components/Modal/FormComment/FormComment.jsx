import {useContext, useRef} from 'react';
import {Text} from '../../../UI/Text';
import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textRef = useRef(null);

  const handleClick = (e) => {
    console.log(textRef.current.value);
  };

  return (
    <form className={style.form}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea ref={textRef} className={style.textarea}></textarea>
      <button onClick={handleClick} className={style.btn}>Отправить</button>
    </form>
  );
};
