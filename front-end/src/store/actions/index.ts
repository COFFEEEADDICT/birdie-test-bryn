import { AppActions, MONITOR_PAGE_FLAG } from './../types/sideNavigationTypes';

export const monitorPageFlagAction = (): AppActions => ({
    type: MONITOR_PAGE_FLAG,
});

// export const getEvents = (id: string) => ({
//     type: GET_EVENTS_ID,
//     payload: id
// });

// export const getDate = (date: string) => ({
//     type: GET_DATE,
//     payload: date
// });