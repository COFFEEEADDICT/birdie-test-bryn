import * as React from 'react';
import styled from 'styled-components';

// import DateSelector from '../UI/DateSelector';

const StyledMainMonitorDiv = styled.div` 
    display: grid;
    grid-template-columns: repeat(4);

    max-height: 80%;
    padding: 50px;
    width: 70vw;
    height: 70vh;
    background-color: #F9F9F9;
    border-radius: 30px;
`;

const TopLeftSection = styled.div` 
    grid-row: 1 / 5;
    grid-column: 1 / 3;
    background:red;
`;

const BottomLeftSection = styled.div` 
    grid-row: 5/ 3;
    grid-column: 1 / 3;
    background:greenyellow;
`;

const RightSection = styled.div` 
    grid-row: 1 / 5;
    grid-column: 2 / 4;
    background:dodgerblue;
`;

const MonitorContainer = () => {
    return (
        <>
            <StyledMainMonitorDiv>
                
                <TopLeftSection>
                     {/* <DateSelector /> */}
                </TopLeftSection>
                
                <BottomLeftSection>
                    {'#LeftBottom content in there'}
                </BottomLeftSection>

                <RightSection>
                    {'#Right content in here'}
                </RightSection>

            </StyledMainMonitorDiv>
        </>
    );
};

export default MonitorContainer;