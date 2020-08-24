import { RootState } from '@App/store/reducers';
import { call, put, takeLatest, select } from 'redux-saga/effects';

import { fetchTimeLine } from '../../components/API';
import { REQUEST_API_DATA_TIMELINE } from '../types/userDataTypes';
import { storeApiTimeLine } from '../actions';

function* getApiData() {
  try {
    const patientIdSelected = yield select((state: RootState) => state.userData.patientIdSelected);
    const dateSelected = yield select((state: RootState) =>  state.userData.dateSelected);
    const url = `${patientIdSelected}/${dateSelected}`;
     
    const data = yield call(fetchTimeLine, url);
    yield put(storeApiTimeLine(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA_TIMELINE, getApiData);
}