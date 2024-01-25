import {useEffect} from 'react';
import {Text} from '../../../UI/Text';
import style from './Page404.module.css';
import {useNavigate} from 'react-router-dom';

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={style.content}>
      <Text className={style.error} As='h2' size={26} color='red'>
        Ошибка 404
      </Text>

      <Text As='p' size={22} color='blue'>
       Страница не найдена или не существует
      </Text>


      <Text As='p' size={20} color='blue'>
        Через 5 секунд вы автоматически вернетесь на главную страницу
      </Text>
    </div>
  );
};
