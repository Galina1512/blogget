/* eslint-disable no-unused-vars */
import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../API/const';
import {useSelector} from 'react-redux';

export const usePost = () => {
  const [postData, setPostData] = useState([]);
  const token = useSelector(state => state.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((data) => setPostData(data.data.children));
    setLoading(false);
  }, [token]);
  return [postData, loading];
};
