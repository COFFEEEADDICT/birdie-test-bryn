import * as React from 'react';
import styled from 'styled-components';
import { DateSelector } from '../UI/DateSelector';
import { PatientSelector } from '../UI/PatientSelector';
import { TimelineUI } from '../UI/TimelineUI';
//   grid-template-columns: repeat(4);
// display: grid;
const StyledMainMonitorDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
   
    padding: 50px;
    width: 70vw;
    
    background-color: #F9F9F9;
    border-radius: 30px;
`;

const LeftSide = styled.div` 
    flex: 0.3;
    align-items: center;
    justify-content: center; 
`;

const RightSide = styled.div` 
    flex: 0.7;
    align-items: center;
    justify-content: center; 
`;

const TopLeftSection = styled.div`
    display: flex;
    background: #e8e9eb;
    height: 35vh; 
    align-items: center;
    justify-content: center; 
`;

const BottomLeftSection = styled.div`
    display: flex;
    background: #e8e9eb;
    height: 35vh;
    align-items: center;
    justify-content: center; 
`;

const RightSection = styled.div` 
    display: flex;
    background: dodgerblue;
    height: 70vh;
    align-items: center;
    justify-content: center;
    overflow: auto;
    max-height: 100%;
`;
// overflow: hidden;
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
                     {/* < div style={{ height: '10000px' }}> */}
                      <TimelineUI />
                     {/* </ div> */}
                </RightSection>
            </ RightSide>

            </ StyledMainMonitorDiv>
        </>
    );
};

export default MonitorContainer;