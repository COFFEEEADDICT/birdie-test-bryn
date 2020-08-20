// import 'date-fns';
// import * as React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
 
// const DateSelector = () => {
//     // ui Date
//     const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//         new Date('2019-04-26T07:08:21.758Z'),
//     );
//     // DB call date // dateFormatted
//     const [, setFormatDate] = React.useState<String>('');
 
//     const setDatefunc = (date: Date): void => {
//         setFormatDate(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
//         // handleDateDispatch(dateFormatted)
//     };

//     const handleDateChange = (date: Date): void => {
//         setSelectedDate((date));
//         setDatefunc(date);
//     };

//     return (
//         <MuiPickersUtilsProvider utils={DateFnsUtils} >
//             <Grid container={true} justify="space-around" >

//                 <KeyboardDatePicker
//                     margin="normal"
//                     id="date-picker-dialog"
//                     label="Pick a date"
//                     format="MM/dd/yyyy"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date',
//                     }}
//                 />

//             </Grid>
//         </ MuiPickersUtilsProvider>
//     );
// };

// // export interface DispatchProps {
// //     handleDateDispatch: () => void;
// // }

// // // send handle selected date action
// // const mapDispatchToProps = (dispatch: any): DispatchProps => {
// //     return {
// //         handleDateDispatch: (date: string) => dispatch(handleDateAction(date))
// //     }
// // };

// export default DateSelector;
