export const GET_CARE_RECIPIENTS = 'GET_CARE_RECIPIENTS';
export const GET_DATA_LIST = 'GET_DATA_LIST';
export const SET_PATIENT_ID = 'SET_PATIENT_ID';
export const REQUEST_API_DATA_TIMELINE = 'REQUEST_API_DATA_TIMELINE';
export const STORE_API_DATA_TIMELINE = 'STORE_API_DATA_TIMELINE';
export const SET_DATE = 'SET_DATE';

export interface GetUserData {
    type: typeof GET_CARE_RECIPIENTS;
    payload: string[];
}

export interface RequestDataTimeline {
    type: typeof REQUEST_API_DATA_TIMELINE;
}

export interface StoreDataTimeline { 
    type: typeof STORE_API_DATA_TIMELINE;
    payload: [];
}

export interface SetPatientID {
    type: typeof SET_PATIENT_ID;
    payload: string;
}

export interface SetDate {
    type: typeof SET_DATE;
    payload: string;
}

export type UserDataTypes = GetUserData  | SetPatientID | StoreDataTimeline | RequestDataTimeline | SetDate;