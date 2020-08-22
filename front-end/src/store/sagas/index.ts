function* initSaga() {
  yield [];
}  

export default initSaga;

// const apiCall = async ( ) => {
//     const request = await fetch('http://localhost:8000/recevingcare')
//     .then(res => res.json())
//     .then(resp => resp);
    
//   } 

// function* fetchData(action) {
//   try {
//      const user = yield call(apiCall, action.payload.userId );
//      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//   } catch (e) {
//      yield put({type: "USER_FETCH_FAILED", message: e.message});
//   }
// }

// http://localhost:8000/recevingcare/ df50cac5-293c-490d-a06c-ee26796f850d/2019-05-02