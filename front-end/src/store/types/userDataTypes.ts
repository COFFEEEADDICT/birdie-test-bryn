export const GET_CARE_RECIPIENTS = 'GET_CARE_RECIPIENTS';

export interface GetUserData {
    type: typeof GET_CARE_RECIPIENTS;
    payload: string[];
}

export type UserDataTypes = GetUserData;
