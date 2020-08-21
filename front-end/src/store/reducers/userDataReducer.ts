import { GET_CARE_RECIPIENTS } from '../types/userDataTypes';
import { UserDataState } from '.';
import { AppActions } from '../types';

const userDataInitState: UserDataState = {
    careRecipients: [],
};
// export interface UserDataState {
//     care_recipients: string[]
// }

export function userDataReducer(state: UserDataState = userDataInitState, action: AppActions): UserDataState {
  switch (action.type) {
    case GET_CARE_RECIPIENTS:
      return { careRecipients: action.payload }; 
 
      default:
        return state;
  }
}