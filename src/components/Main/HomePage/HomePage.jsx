import {Text} from '../../../UI/Text';
import style from './HomePage.module.css';

export const HomePage = () => (
  <div className={style.container}>
    <Text As='h1' size={26} tsize={32} color={'orange'} bold={900}>
    СТАРТОВАЯ СТРАНИЦА</Text>
    <Text As='h2' size={22} tsize={30} color={'blue'} >Добро пожаловать!</Text>
    <Text As='p' size={20} tsize={24}>Выберите категорию</Text>
  </div>
);

