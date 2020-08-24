import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect, MapStateToPropsParam, useDispatch } from 'react-redux';
import { RootState } from '@App/store/reducers';
import { SET_PATIENT_ID } from '@App/store/types/userDataTypes';
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

type PatientProps  = {
  userPatientList: string[];
}; 

const PatientComponent: React.FunctionComponent<PatientProps> = ({userPatientList}: PatientProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [patientSelected, setPatient] = React.useState('');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPatient(event.target.value as string);
    dispatch( {type: SET_PATIENT_ID, payload: event.target.value as string });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pick a Caree here</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="id-select"
          value={patientSelected}
          onChange={handleChange}
          label="PatientSelector"
        >
          {userPatientList.map((each: string) => {return <MenuItem key={each} value={each} >{each}</MenuItem>; } )}
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps: MapStateToPropsParam<PatientProps, {}, RootState> = (state) => ({
  userPatientList: state.userData.careRecipients
});

// const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => {
//   return {
//     handleSelectedPatientID: (selectedId: string) => { 
//       const selected: SetPatientID = {
//         type: SET_PATIENT_ID,
//         payload: selectedId,
//       };
// 		    dispatch(selected);
// 		},
// 	};
// };
 
export const PatientSelector = connect<PatientProps, {},
 {}, RootState>(mapStateToProps)(PatientComponent); 