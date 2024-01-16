import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const PostContent = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          bold
          size={14} tsize={22}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal
          markdown={markdown}
          title={title}
          author={author}
          id={id}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
  closeModal: PropTypes.func,
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  classNames: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
};

