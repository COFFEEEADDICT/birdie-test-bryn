import { GET_CARE_RECIPIENTS, SET_PATIENT_ID, STORE_API_DATA_TIMELINE, SET_DATE } from '../types/userDataTypes';
import { UserDataState } from '.';
import { AppActions } from '../types';

const userDataInitState: UserDataState = {
    careRecipients: [],
    patientList: [],
    patientIdSelected: null,
    dateSelected: null,
};

export function userDataReducer(state: UserDataState = userDataInitState, action: AppActions): UserDataState {
  switch (action.type) {
    
      case GET_CARE_RECIPIENTS:
        return { ...state, careRecipients: action.payload }; 

      case SET_DATE:
        return { ...state, dateSelected: action.payload }; 

      case SET_PATIENT_ID:
        return { ...state, patientIdSelected: action.payload }; 

      case STORE_API_DATA_TIMELINE: // send id+date params to retrive the data
        return { ...state, patientList: action.payload };

      default:
        return state;
  }
}