/* eslint-disable semi */
import {useContext} from 'react';
import {postContext} from '../../../context/postContext';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const {postData, loading} = useContext(postContext);
  // console.log(postData);

  if (loading) {
    return <p>Загрузка...</p>
  }
  return (
    <ul className={style.list}>
      {postData.map(item =>
        <Post
          key={item.data.id}
          postData={item.data}
        />
      )}
    </ul>
  );
};

