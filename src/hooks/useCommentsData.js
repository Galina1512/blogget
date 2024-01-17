import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../API/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState([]);
  const {token} = useContext(tokenContext);
  const [loading, setLoading] = useState('Загрузка...');

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
        loading();
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
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setCommentsData([post, comments]);
          console.log(commentsData);
          setLoading('');
        }
      )
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [commentsData];
};


