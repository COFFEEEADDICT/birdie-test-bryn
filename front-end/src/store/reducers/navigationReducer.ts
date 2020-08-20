import { MONITOR_PAGE_FLAG, SideNavigationTypes } from '../types/sideNavigationTypes';
import { SideNavSate } from '.';
import { initialState } from './initialState';
 
export function navigationReducer(state: SideNavSate = initialState, action: SideNavigationTypes): SideNavSate {
  switch (action.type) {
    case MONITOR_PAGE_FLAG:
      return { monitorPageFlag: !state.monitorPageFlag }; 
 
      default:
            return state;
  }
}