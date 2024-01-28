import {call, put, select, takeEvery} from 'redux-saga/effects';
import {URL_API} from '../../API/const';
import axios from 'axios';
import {SEARCH_REQUEST, searchRequestSuccess} from './searchAction';

function* fetchSearch(search) {
  const token = yield select(state => state.token.token);
  try {
    const request = yield axios(`${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    yield put(searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchRequestSuccess(error));
  }
}

function* workerSearch(action) {
  const token = yield select(state => state.token.token);
  const {data} = yield call(fetchSearch, action.search, token);
  console.log(data.children);
  console.log(data.children[1].data);
  yield put(searchRequestSuccess(data));
}

export function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, workerSearch);
}
