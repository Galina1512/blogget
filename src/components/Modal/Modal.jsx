import {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import {Text} from '../../UI/Text';
import ReactDOM from 'react-dom';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
import Markdown from 'markdown-to-jsx';
import {useCommentsData} from '../../hooks/useCommentsData.js';
import {PreLoader} from '../../UI/PreLoader/PreLoader.jsx';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const data = useCommentsData(id);
  const {status, post, comments} = data;

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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <PreLoader/>}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <Text As='h2' tsize={26} className={style.title}>
              {post.title}
            </Text>

            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      targer: '_blank',
                    },
                  },
                },
              }}>
                {post.selftext}
              </Markdown>
            </div>
            <Text As='p' className={style.author}>
              {post.author}
            </Text>

            <FormComment/>

            <Comments comments={comments}/>

            <button className={style.close} onClick={closeModal}>
              <CloseIcon />
            </button>
          </>
        )}
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
