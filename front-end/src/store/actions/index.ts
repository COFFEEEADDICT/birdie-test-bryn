import { MONITOR_PAGE_FLAG } from './../types/sideNavigationTypes';
import { AppActions } from '../types';
import { GET_CARE_RECIPIENTS, GET_DATA_LIST, SET_PATIENT_ID } from '../types/userDataTypes';

export const monitorPageFlagAction = (): AppActions => ({
    type: MONITOR_PAGE_FLAG,
});

export const getCareRecipents = (recipents: string[]) => ({
    type: GET_CARE_RECIPIENTS,
    payload: recipents
});

export const getDataList = (params: string) => ({
    type: GET_DATA_LIST,
    payload: params
});

export const handleSelectedPatientID = (PatientIDSelected: string) => ({
    type: SET_PATIENT_ID,
    payload: PatientIDSelected
});