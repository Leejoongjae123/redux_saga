import {call,put,takeEvery} from 'redux-saga/effects';
import {getCatsSuccess} from './catState'
import catSlice from './catState'
import {useState} from 'react'
import {getCatsNumber} from './catState'

function* workGetCatsFetch(){
  const cats=yield call( ()=>fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats=yield cats.json();
  console.log("result",getCatsNumber())
  // const formattedCatsShortened=formattedCats.slice(0,20);
  yield put(getCatsSuccess(formattedCats))

}


function* catSaga(){
  yield takeEvery('cats/getCatsFetch',workGetCatsFetch)
  yield takeEvery('cats/getCatsNumber',workGetCatsFetch)
}

export default catSaga;
