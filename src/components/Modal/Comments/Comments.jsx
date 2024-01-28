import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
// import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

export const Comments = ({comments}) => {
  // const {author, body} = comments;
  console.log(comments);
  return (
    <>
      <div className={style.content}>
        {comments ? (
      <ul className={style.list}>
        {comments.map(item => (
          <li className={style.item} key={item.id}>
            <Text As='h3' className={style.author} size={18} tsize={22}>
              {item.author}
            </Text>
            <Text As='p' className={style.comment} size={14} tsize={18}>
              {item.body.replaceAll(`&gt;`, ' ')}
            </Text>
            <Text As='h3' className={style.author} size={18} tsize={22}>
              {item.author}
            </Text>

            {/* <Date date={comments.created} /> */}
          </li>
        )
        )}
      </ul>
      ) : (
      <h3>Нет комментариев</h3>
      )
        }
      </div>
      {/* <Text As='p' className={style.author} size={16} tsize={20}>
        {data[1].date}
      </Text> */}
    </>
  );
};

Comments.propTypes = {
  data: PropTypes.array,
  comments: PropTypes.array,
};

