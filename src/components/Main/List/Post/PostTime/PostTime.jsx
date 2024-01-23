import style from './PostTime.module.css';
import formatDate from '../../../../../utils/formatDate.jsx';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text.jsx';

export const PostTime = ({date}) => (
  <div className={style.post}>
    <Text As='time' className={style.date} dateTime={date}>
      {formatDate(date)}
    </Text>
  </div>
);


PostTime.propTypes = {
  date: PropTypes.number,
};

