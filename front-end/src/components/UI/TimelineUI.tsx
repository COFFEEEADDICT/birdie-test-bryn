import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '@App/store/reducers';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import CheckIcon from '@material-ui/icons/Check';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    color: '#00254d'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

type TimeLineProps = {
  patientList: []
};

type Observation = {
  id: string,
  note: string,
  visit_id: string,
  timestamp: string,
  event_type: string,
  caregiver_id: string,
  task_instance_id?: string,
  care_recipient_id?: string,
  task_definition_description: string,
  task_schedule_id?: string,
  task_schedule_note: string,
  task_definition_id?: string,
  mood: string,
  check_in: string;
  check_out: string;
  pad_condition: string;
  incontinence_pad_observation: string;
  meal: string;
  medication_type: string;
  fluid: string;
  consumed_volume_ml: string;
};

const TimelineComponent: React.FunctionComponent<TimeLineProps> = ({patientList}: TimeLineProps) => {
  const classes = useStyles();
  const starterText = 'Please pick a valid Date and a Caree';

  const TimeLineMap = patientList.map((obj: Observation) => {

    const iconCaseSwitch = (eventType: string) => {
      let iconUI;

      switch (eventType) {
        case 'check_in':
          return iconUI = <PeopleIcon />;
        case 'task_completed':
          return iconUI = <AssignmentTurnedInIcon />;
        case 'fluid_intake_observation':
          return iconUI = <LocalDrinkIcon />;
        case 'incontinence_pad_observation':
          return iconUI = <TransferWithinAStationIcon />;
        case 'check_out':
          return iconUI = <EmojiPeopleIcon />;
        case 'visit_completed':
          return iconUI = <EmojiPeopleIcon />;
        case 'regular_medication_taken':
          return iconUI = <LocalPharmacyIcon />;
        case 'food_intake_observation':
          return iconUI = <FastfoodIcon />;
        case 'general_observation':
          return iconUI = <VisibilityIcon />;
        case 'physical_health_observation':
          return iconUI = <AccessibilityNewIcon />;
        case 'mental_health_observation':
          return iconUI = <FavoriteIcon />;      
        default:
          return iconUI = <CheckIcon />;
      }
      return iconUI;
    };

    const observationHeader = (event: Observation) => {
      let text;
      if (event.mood) {
        return text = `${event.care_recipient_id} was`;
      } else if (event.event_type === 'general_observation') {
        return text = '';
      } else if (event.event_type === 'no_medication_observation_received') {
        return text = 'No medication observation received';
      } else if (event.event_type === 'food_intake_observation') {
        return text = event.meal.charAt(0).toUpperCase() + event.meal.slice(1);
      } else if (event.note) {
        return text = event.note;
      } else if (event.task_schedule_note === '') {
        return text = '';
      } else if (event.task_schedule_note) {
        return text = event.task_schedule_note;
      } else if (event.event_type === 'fluid_intake_observation') {
        return text = `Fluid: ${event.fluid}`;
      } else if (event.event_type === 'regular_medication_taken') {
        return text = event.medication_type;
      } else if (event.event_type === 'incontinence_pad_observation') {
        return text = 'Pad condition'; 
      } else if (event.event_type === 'alert_raised') {
        return text = 'Alert raised';
      } else if (event.event_type === 'check_in') {
        return text = `${event.caregiver_id}`;
      } else if (event.event_type === 'check_out') {
        return text = `${event.caregiver_id}`;
      } else if (event.event_type === 'visit_completed') {
        return text = `${event.caregiver_id}`;

      } else {
        return text = 'Nothing noted';
      }
      return text;
    };
     
    const observationText = (event: Observation) => {
      let text;
      if (event.mood) {
        return text = event.mood;
      } else if (event.task_definition_description) {
        return text = event.task_definition_description;
      } else if (event.note) {
        return text = event.note;

      } else if (event.event_type === 'regular_medication_taken') {
        return text = 'medication taken';
      } else if (event.event_type === 'fluid_intake_observation') {
        return text = `ml: ${event.consumed_volume_ml}`;
      } else if (event.event_type === 'food_intake_observation') {
        return text = event.note;
      } else if (event.event_type === 'incontinence_pad_observation') {
        return text = event.pad_condition; 
      } else if (event.event_type === 'check_in') {
        return text = `checked in`;
      } else if (event.event_type === 'check_out') {
        return text = `checked out`;
      } else if (event.event_type === 'visit_completed') {
        return text = `checked out`;
      } else if (event.event_type === 'alert_raised') {
        return text = 'Alert...';
      } else {
        return text = 'Nothing noted';
      }
      return text;
    };

    return ( 
    <TimelineItem key={obj.id}>
       
      <TimelineOppositeContent> 
          <Typography variant="body2" > 
          {/* <Typography variant="body2" color="textSecondary">  */}
          {/* {obj.event_type} */}
          {obj.timestamp}
        </Typography>
      </TimelineOppositeContent>
 
      <TimelineSeparator>
        <TimelineDot>
            {obj.mood ? 
                obj.mood.includes('okay') || obj.mood.includes('happy') ? 
                <MoodIcon />
                : <MoodBadIcon />
            : iconCaseSwitch(obj.event_type)} 
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
 
      <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h2">
              {observationHeader(obj)}
            </Typography>
            <Typography variant="body2">
              {observationText(obj)}
            </Typography>

          </Paper>
      </TimelineContent>

    </TimelineItem>
    );
  });

  return (
      <div style={{height: '90%', width: '100%'}}> 
        <Timeline align="alternate">
          {patientList.length > 0 ? TimeLineMap : starterText}
        </Timeline>
      </div>
  );
};
 
const mapStateToProps: MapStateToPropsParam<TimeLineProps, {}, RootState> = (state) => ({
  patientList: state.userData.patientList
});

export const TimelineUI = connect<TimeLineProps, {}, {}, RootState>(mapStateToProps)(TimelineComponent);