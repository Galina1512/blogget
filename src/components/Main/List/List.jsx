import {usePostsData} from '../../../hooks/usePostsData';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [postsData] = usePostsData();
  return (
    <ul className={style.list}>
      {postsData.map(({data}) => (
        <Post key={data.id} postData={data} />
      ))}
    </ul>
  );
};
