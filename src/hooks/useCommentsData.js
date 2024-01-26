import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const commentsData = useSelector((store) => store.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, []);

  return commentsData;
};
