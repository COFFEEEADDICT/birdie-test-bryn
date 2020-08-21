import { MONITOR_PAGE_FLAG } from './../types/sideNavigationTypes';
import { AppActions } from '../types';
import { GET_CARE_RECIPIENTS } from '../types/userDataTypes';

export const monitorPageFlagAction = (): AppActions => ({
    type: MONITOR_PAGE_FLAG,
});

export const getCareRecipents = (recipents: string[]) => ({
    type: GET_CARE_RECIPIENTS,
    payload: recipents
});

// export const getDate = (date: string) => ({
//     type: GET_DATE,
//     payload: date
// });