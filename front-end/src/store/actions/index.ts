import { MONITOR_PAGE_FLAG } from './../types/sideNavigationTypes';
import { AppActions } from '../types';
import { GET_CARE_RECIPIENTS, REQUEST_API_DATA_TIMELINE, SET_PATIENT_ID, STORE_API_DATA_TIMELINE } from '../types/userDataTypes';

export const monitorPageFlagAction = (): AppActions => ({
    type: MONITOR_PAGE_FLAG,
});

export const getCareRecipents = (recipents: string[]) => ({
    type: GET_CARE_RECIPIENTS,
    payload: recipents
});

export const handleSelectedPatientID = (PatientIDSelected: string) => ({
    type: SET_PATIENT_ID,
    payload: PatientIDSelected
});
// api data list
export const requestApiTimeLine = (params: string) => ({
    type: REQUEST_API_DATA_TIMELINE,
    payload: params
});
// store data
export const storeApiTimeLine = (data: []) => ({
    type: STORE_API_DATA_TIMELINE,
    payload: data
});