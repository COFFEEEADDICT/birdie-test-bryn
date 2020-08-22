import { GET_CARE_RECIPIENTS, SET_PATIENT_ID, SET_DATA_LIST } from '../types/userDataTypes';
import { UserDataState } from '.';
import { AppActions } from '../types';

const userDataInitState: UserDataState = {
    careRecipients: [],
    patientList: [],
    patientIdSelected: "",
};

export function userDataReducer(state: UserDataState = userDataInitState, action: AppActions): UserDataState {
  switch (action.type) {
    
      case GET_CARE_RECIPIENTS:
        return { ...state, careRecipients: action.payload }; 
    
      case SET_PATIENT_ID:
        return { ...state, patientIdSelected: action.payload }; 

      case SET_DATA_LIST: // send id+date params to retrive the data
        return { ...state, patientList: action.payload };

      default:
        return state;
  }
}