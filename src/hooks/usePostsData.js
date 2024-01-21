import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/posts/postsAction';

export const usePostsData = () => {
  const postsData = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsync());
  }, []);

  return [postsData];
};
