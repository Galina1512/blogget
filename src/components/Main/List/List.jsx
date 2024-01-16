/* eslint-disable semi */
import {useContext} from 'react';
import {postContext} from '../../../context/postContext';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const {postData} = useContext(postContext);
  // console.log(postData);

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

