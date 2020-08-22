import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '@App/store/reducers';
import { AppActions } from '@App/store/types';
// import { handleSelectedPatientID } from '@App/store/actions';
import { SET_PATIENT_ID, SetPatientID } from '@App/store/types/userDataTypes';
 
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
  patientIdSelected: string | unknown;
}; 

const PatientComponent: React.FunctionComponent<PatientProps> = 
({userPatientList, patientIdSelected}: PatientProps) => {
  const classes = useStyles();
  
  const [patientSelected, setPatient] = React.useState('');
  
  console.log(patientSelected, patientIdSelected);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPatient(event.target.value as string);
  };

  // handleSelectedPatientID(patientSelected);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pick a patient here</InputLabel>
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
  userPatientList: state.userData.careRecipients,
  patientIdSelected: state.userData.patientIdSelected
});

const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => {
  return {
    handleSelectedPatientID: (selectedId: string) => { 
      const selected: SetPatientID = {
        type: SET_PATIENT_ID,
        payload: selectedId,
      };
		    dispatch(selected);
		},
	};
};
 
export const PatientSelector = connect<PatientProps, {},
 {}, RootState>(mapStateToProps, mapDispatchToProps)(PatientComponent); 