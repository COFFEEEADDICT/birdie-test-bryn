import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '@App/store/reducers';
 
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
  userPatientList: string[]
}; 

const PatientComponent: React.FunctionComponent<PatientProps> = ({userPatientList}: PatientProps) => {
  const classes = useStyles();
  
  const [patientSelected, setPatient] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPatient(event.target.value as string);
  };

  // let userPatientList: string[]
  // userPatientList = useSelector<RootState>(state => state.userData.careRecipients) => string[];
  // console.log(userPatientList);

  // React.useEffect(() => {
  //     async function fetchPatientList() {
  //       const request = await axios('http://localhost:8000/recevingcare');
  //       console.log(request);
  //       return request;
  //     }
  //     fetchPatientList();
  // },  []);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pick a patient here</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
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

export const PatientSelector = connect<PatientProps, {}, {}, RootState>(mapStateToProps)(PatientComponent); 