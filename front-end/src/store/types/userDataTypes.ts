export const GET_CARE_RECIPIENTS = 'GET_CARE_RECIPIENTS';
export const GET_DATA_LIST = 'GET_DATA_LIST';
export const SET_PATIENT_ID = 'SET_PATIENT_ID';
export const SET_DATA_LIST = 'SET_DATA_LIST';

export interface GetUserData {
    type: typeof GET_CARE_RECIPIENTS;
    payload: string[];
}

export interface GetDataList {
    type: typeof GET_DATA_LIST;
    payload: string;
}

export interface SetDataList {
    type: typeof SET_DATA_LIST;
    payload: [];
}

export interface SetPatientID {
    type: typeof SET_PATIENT_ID;
    payload: string;
}

export type UserDataTypes = GetUserData | GetDataList | SetPatientID | SetDataList;