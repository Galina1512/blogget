import {useEffect, useState} from 'react';
import {URL_API} from '../API/const';
import {useSelector} from 'react-redux';

export const getComments = (id) => {
  const [commentsData, setCommentsData] = useState([]);
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {children},
          },
        ]) => {
          const comments = children.map(item => item.data);
          setCommentsData([post, comments]);
          console.log(comments);
          console.log(post);
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return commentsData;
};


