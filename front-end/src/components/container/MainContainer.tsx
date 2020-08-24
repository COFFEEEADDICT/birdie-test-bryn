import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '@App/store/reducers';

import MonitorContainer from './MonitorContainer';
 
const StyledMainFrameTrue = {
    transform: 'translate(26%, 10%)',
    padding: '10px',
    margin: 'auto',
};

const StyledMainFrameFalse = {
    transform: 'translate(24%, 8%)',
};

type MainProps = {
    monitorPageFlag: boolean;
};

const MainContainerPlain: React.FunctionComponent<MainProps> = ({monitorPageFlag}: MainProps) => { 
    return (
        <div style={monitorPageFlag ? StyledMainFrameFalse : StyledMainFrameTrue} >
            {monitorPageFlag ? < MonitorContainer /> : 
            'Thanks for reviewing - Made by Bryn Heath - Please click on the monitoring section'}
        </div>
    );
};

const mapStateToProps: MapStateToPropsParam<MainProps, {}, RootState> = (state) => ({
    monitorPageFlag: state.sideNav.monitorPageFlag
});

export const MainContainer = connect<MainProps, {}, {}, RootState>(mapStateToProps)(MainContainerPlain);