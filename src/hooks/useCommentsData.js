import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const commentsData = useSelector((store) => store.comments);
  console.log(commentsData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(1);
    dispatch(commentsRequestAsync(id));
  }, []);

  return commentsData;
};
