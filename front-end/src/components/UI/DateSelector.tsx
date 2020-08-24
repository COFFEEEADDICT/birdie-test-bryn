import * as React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { useDispatch } from 'react-redux';
import { REQUEST_API_DATA_TIMELINE, SET_DATE } from '@App/store/types/userDataTypes';

type DateSelectorProps = {
};

const DateSelectorUI: React.FunctionComponent<DateSelectorProps> = () => {
    const dispatch = useDispatch();
    
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2019-05-02T00:00:00.000Z'),
    );
    
    const [, setFormatDate] = React.useState<String>('');
     
    const setDatefunc = (date: Date): void => {
        setFormatDate(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
        
        dispatch({type: SET_DATE, 
               payload: `${date.getFullYear()}-${date.getMonth() < 10 ? 0 : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()}` });
        dispatch({type: REQUEST_API_DATA_TIMELINE});
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

export const DateSelector = (DateSelectorUI);