import {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import {Text} from '../../UI/Text';
import ReactDOM from 'react-dom';
import {FormComment} from './FormComment/FormComment';
// import {Comments} from './Comments/Comments';
import Markdown from 'markdown-to-jsx';
import {getComments} from '../../API/getComments';
import {commentsRequest} from '../../store/comments/comments.js';
import {useDispatch, useSelector} from 'react-redux';

export const Modal = ({id, closeModal}) => {
  getComments(id);
  const dispatch = useDispatch();
  dispatch(commentsRequest());
  const post = useSelector(state => state.post);
  const comments = useSelector(state => state.comments);
  console.log(comments);
  console.log(post);

  const overlayRef = useRef(null);
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
    return () => {
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  // if (loading) {
  //   return <p>Загрузка...</p>;
  // }

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <Text
          As='h2'
          tsize={26}
          className={style.title}
        >
          {/* {post.title} */}
        </Text>
        <Markdown options={{
          overrides: {
            a: {
              props: {
                targer: '_blank',
              },
            },
          },
        }}>
          {/* {post.body} */}
        </Markdown>

        {/* <Comments data={comments}/> */}
        <FormComment/>
        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
