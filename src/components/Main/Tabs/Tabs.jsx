/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {ReactComponent as MenuIcon} from './img/menu.svg';
import {debounceRaf} from '../../../utils/debounceRaf';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomeIcon},
  {value: 'Сохраненные', Icon: SaveIcon},
  {value: 'Мои посты', Icon: PostIcon},
].map(assignId);


export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [list, setList] = useState(LIST);
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 760) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  const handleClick = (id) => {
    setList(list.filter(item => item.id === id));
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);


  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <MenuIcon/>
            <ArrowIcon/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)} >
          {list.map(({value, id, Icon}) => (
            <li key={id} className={style.item}>
              <button className={style.btn}
                onClick={() => {
                  handleClick(id);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  LIST: PropTypes.array,
  setList: PropTypes.func,
};
