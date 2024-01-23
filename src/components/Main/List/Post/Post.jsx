import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPhoto from './PostPhoto';
import PostContent from './PostContent';
import PostRating from './PostRating';
import PostTime from './PostTime';
import {DeleteButton} from './PostRating/DeleteButton/DeleteButton';

export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    url,
    id,
    selftext: markdown,
    created: date,
  } = postData;

  return (
    <li className={style.post}>
      <PostPhoto thumbnail={thumbnail} tltle={title}/>
      <PostContent
        title={title}
        author={author}
        markdown={markdown}
        url={url}
        id={id}
      />
      <PostRating ups={ups}/>
      <PostTime date={date}/>
      <DeleteButton/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
