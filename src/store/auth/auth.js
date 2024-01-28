import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../../API/const';
import {deleteToken} from '../token/token';

const initialState = {
  loading: false,
  auth: {},
};

const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (auth) => ({
  type: AUTH_REQUEST_SUCCESS,
  auth,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const getAuth = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  if (!token) return;

  fetch(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({auth: {name, icon_img: iconImg}}) => {
      const img = iconImg.replace(/\?.*$/, '');
      const auth = {name, img};
      dispatch(authRequest(auth));
    })
    .catch((err) => {
      console.error(err);
      dispatch(deleteToken());
    });
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.auth,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        auth: {},
      };
    default:
      return state;
  }
};


