import * as React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '@App/store/reducers';
import { AppActions } from '@App/store/types';
import { SetPatientID, SET_DATA_LIST } from '@App/store/types/userDataTypes';
// import { getDataList } from '@App/store/actions';

type DateSelectorProps = {
    apiFetchPatientList: Function;
    patientIdSelected: string | null | unknown;
};

const DateSelectorUI: React.FunctionComponent<DateSelectorProps> = ({apiFetchPatientList, patientIdSelected}: DateSelectorProps) => {
    console.log(patientIdSelected);
    // ui Date
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2019-04-26T07:08:21.758Z'),
    );
    // use this for the api/db call
    const [formattedDate, setFormatDate] = React.useState<String>('');
    console.log(formattedDate);
    const setDatefunc = (date: Date): void => {
        setFormatDate(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
        apiFetchPatientList(formattedDate);
    };

    const handleDateChange = (date: Date): void => {
        setSelectedDate((date));
        setDatefunc(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <Grid container={true} justify="space-around">

                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Pick a date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

            </Grid>
        </ MuiPickersUtilsProvider> 
    );
};
 
const mapStateToProps: MapStateToPropsParam<DateSelectorProps, {}, RootState> = (state) => ({
    patientIdSelected: state.userData.patientIdSelected
});

const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => {
    return {
        apiFetchPatientList: (selectedId: string) => { 
          const selected: SetPatientID = {
            type: SET_DATA_LIST,
            payload: ``,
          };
                dispatch(selected);
            },
        };
    // apiFetchPatientList: () => dispatch(),
};

export const DateSelector = connect<DateSelectorProps, {},
 {}, RootState>(mapStateToProps, mapDispatchToProps)(DateSelectorUI);