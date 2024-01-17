import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useContext, useEffect, useRef} from 'react';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
import {commentsDataContext} from '../../context/commentsDataContext';

export const Modal = ({id, closeModal}) => {
  const {comments} = useContext(commentsDataContext);
  console.log({comments});


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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{comments.title}</h2>

        {comments ? (
          <ul className={style.list}>
            {comments.map(item =>
              <Comments key={item.id} comments={comments}/>
            )}
          </ul>
        ) : (
        <h3>Нет комментариев</h3>
        )
        }
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
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
