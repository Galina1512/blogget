/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounceRaf';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as Hot} from './img/hot.svg';
import {Text} from '../../../UI/Text/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: Hot, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [itemMenu, setItemMenu] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 760) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
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
          <Text As='button' className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {itemMenu}
            <ArrowIcon/>
          </Text>
        </div>
      )}

      {(isDropdownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)} >
          {LIST.map(({value, link, id, Icon}) => (
            <li key={id} className={style.item}>
              <Text As='button' className={style.btn}
                onClick={() => {
                  setItemMenu(value);
                  navigate(`category/${link}`);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
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
