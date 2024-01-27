import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {delToken} from '../../../store/token/tokenAction';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import Preloader from '../../../UI/PreLoader';


export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(delToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {showLogout && (
            <button className={style.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
