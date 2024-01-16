import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as AuthIcon} from './img/auth.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../API/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showBtn, setShowBtn] = useState(true);
  const {auth, clearAuth} = useContext(authContext);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button onClick={() => setShowBtn(!showBtn)} className={style.btn}>
          <img className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Avatar ${auth.name}`}/>
        </button>
      ) :
    (<Text className={style.authLink} As='a' href={urlAuth}>
      <AuthIcon className='style.svg' />
    </Text>
    )}
      { !showBtn && (
        <button className={style.logout} onClick={() => {
          localStorage.removeItem('bearer');
          delToken();
          clearAuth();
        }}>
        Выйти
        </button>
      )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
