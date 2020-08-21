import { combineReducers } from 'redux';
import { navigationReducer } from './navigationReducer';
import { userDataReducer } from './userDataReducer';

export type RootState = Readonly<{
    sideNav: SideNavSate;
    userData: UserDataState;
}>;

export interface SideNavSate {
    monitorPageFlag: boolean; 
}

export interface UserDataState {
    careRecipients: string[];
}

export const rootReducer = combineReducers<RootState>({ 
    sideNav: navigationReducer,
    userData: userDataReducer,
});