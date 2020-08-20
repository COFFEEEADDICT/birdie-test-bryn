export const MONITOR_PAGE_FLAG = 'MONITOR_PAGE_FLAG';

export interface SetMonitorPageFlag {
    type: typeof MONITOR_PAGE_FLAG;
}

export type SideNavigationTypes = SetMonitorPageFlag;

// If we had more nav actions
export type AppActions = SideNavigationTypes;