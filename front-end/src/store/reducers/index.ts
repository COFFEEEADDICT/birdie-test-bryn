import { combineReducers } from 'redux';
import { navigationReducer } from './navigationReducer';

export type RootState = Readonly<{
    sideNav: SideNavSate;
}>;

export interface SideNavSate {
    monitorPageFlag: boolean; 
}

export const rootReducer = combineReducers<RootState>({ 
    sideNav: navigationReducer,
});