import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';
import {AuthLoader} from './AuthLoader/AuthLoader';

export const Auth = () => {
  const delToken = useSelector(state => state.token);
  const [showBtn, setShowBtn] = useState(true);
  const {auth, loading, clearAuth} = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(delToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {!loading ? (
       <AuthLoader/>
      ) : auth.name ? (
    <>
      <button onClick={() => setShowBtn(!showBtn)} className={style.btn}>
        <img className={style.img}
          src={auth.img}
          title={auth.name}
          alt={`Avatar ${auth.name}`}
        />
      </button>
      { !showBtn && (
        <button className={style.logout} onClick={logOut}>
        Выйти
        </button>
      )}
    </>
      ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <AuthIcon className='style.svg' />
      </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};
