import { MONITOR_PAGE_FLAG } from '../types/sideNavigationTypes';
import { SideNavSate } from '.';
import { AppActions } from '../types';
 
const navigationInitState: SideNavSate = {
  monitorPageFlag: false,
};

export function navigationReducer(state: SideNavSate = navigationInitState, action: AppActions): SideNavSate {
  switch (action.type) {
    case MONITOR_PAGE_FLAG:
      return { monitorPageFlag: !state.monitorPageFlag }; 
 
      default:
        return state;
  }
}