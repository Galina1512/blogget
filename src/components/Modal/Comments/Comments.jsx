import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => {
  console.log(style);
  return (
    <li className={style.item}>
      <div className={style.content}>
        <Markdown options={{
          overrides: {
            a: {
              props: {
                targer: '_blank',
              },
            },
          },
        }}>
          {comments.content}
        </Markdown>
      </div>
      <Text As='h3' className={style.author} size={18} tsize={22}>
        {comments.author}
      </Text>
      <Text As='p' className={style.author} size={16} tsize={20}>
        {comments.date}
      </Text>
    </li>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

