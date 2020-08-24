import * as React from 'react';
import styled from 'styled-components';
import { DateSelector } from '../UI/DateSelector';
import { PatientSelector } from '../UI/PatientSelector';
import { TimelineUI } from '../UI/TimelineUI';

// font #00254d
// bg #54c5c1

const StyledMainMonitorDiv = styled.div`
    color: #00254d;
    display: flex;
    flex-direction: row;
    flex: 1;
   
    padding: 50px;
    width: 70vw;
    
    background-color: #F9F9F9;
    border-radius: 30px;
`;

const LeftSide = styled.div`
    flex: 0.2;
    align-items: center;
    justify-content: center; 
`;

const RightSide = styled.div`
    flex: 0.8;
    align-items: center;
    justify-content: center; 
`;

const TopLeftSection = styled.div`
    display: flex;
    background: #54c5c1;
    height: 35vh; 
    align-items: center;
    justify-content: center; 
`;

const BottomLeftSection = styled.div`
    display: flex;
    background: #54c5c1;
    height: 35vh;
    align-items: center;
    justify-content: center; 
`;

const RightSection = styled.div` 
    color: #00254d;
    display: flex;
    background: #54c5c1;
    height: 70vh;
    align-items: center;
    justify-content: center;
    overflow: auto;
    max-height: 100%;
`; // could add overflow: hidden
     
const MonitorContainer = () => {
    return (
        <>
            <StyledMainMonitorDiv>
                
            <LeftSide >
                <TopLeftSection>
                    <PatientSelector />
                </TopLeftSection>
                
                <BottomLeftSection> 
                    <DateSelector />
                </BottomLeftSection>
            </ LeftSide>

            <RightSide >
                <RightSection> 
                      <TimelineUI />
                </RightSection>
            </ RightSide>

            </ StyledMainMonitorDiv>
        </>
    );
};

export default MonitorContainer;