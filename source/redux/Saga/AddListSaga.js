import {put} from 'redux-saga/effects';
import Constant from '../../theme/Constant';
import {loaderAction} from '../Action/LoaderAction';
import {ToastDisplay} from '../Action/ToastAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* AddListSaga(action) {
  const {bodydata} = action;

  console.log('bodydata', bodydata);
  console.log(
    'URL======>',
    Constant.baseURL + Constant.end_Point.ADD_TO_PLAYLIST,
  );

  const token = yield AsyncStorage.getItem('LoginAccessToken');
  console.log('token----', token);
  try {
    const response = yield fetch(
      Constant.baseURL + Constant.end_Point.ADD_TO_PLAYLIST,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(bodydata),
      },
    );
    var responseJson = yield response.json();

    // console.log('Response ====>', responseJson);

    if (responseJson.status_code === 200) {
      yield put(loaderAction(false));
      yield put(
        ToastDisplay({
          type: 'positive',
          title: 'added Successfully',
        }),
      );
    } else {
      yield put(loaderAction(false));
      // yield put(
      //   ToastDisplay({
      //     type: 'nagative',
      //     title: 'Oops! something went wrong.',
      //   }),
      // );
    }
  } catch (err) {
    console.log(err);
    yield put(loaderAction(false));
    // yield put(
    //   ToastDisplay({
    //     type: 'nagative',
    //     title: 'Oops! something went wrong.',
    //   }),
    // );
  }
}
