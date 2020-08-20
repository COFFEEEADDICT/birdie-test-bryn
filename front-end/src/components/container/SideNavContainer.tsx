import styled from 'styled-components';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';
 
import { monitorPageFlagAction } from '../../store/actions';
import { RootState } from '@App/store/reducers';
import { AppActions } from '@App/store/types/sideNavigationTypes';
 
const LogoUrl = require('../../assets/images/logo-birdie.svg');

const StyledSideNav = styled.div`
    height: 100vh;
    width: 10vw;
    align-items: center; 
    justify-content: center;
    padding: 20px; 
    background-color: #F9F9F9; 
    position: fixed;
`;
 
const Logo = styled.img`
    width: auto;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 20px;
`;

interface SideNavProps {
    handleClickFlag: Function;
}

const SideNavContainerFixed: React.FunctionComponent<SideNavProps> = ({handleClickFlag}: SideNavProps) => {
    return ( 
        <StyledSideNav>
            <Logo src={LogoUrl} />
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                <Button>Care plan</Button>
                <Button>Care team</Button>
                <Button>Medication manager</Button>
                <Button>Task planner</Button>
                <Button>Care circle</Button>
                <Button onClick={() => handleClickFlag()}>Monitoring</Button>
                </ButtonGroup>
        </StyledSideNav> 
    );
};

const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => ({
        handleClickFlag: () => dispatch(monitorPageFlagAction()),
});

// export default connect( null, {monitorPageFlagAction: monitorPageFlagAction} )
// ( SideNavContainerFixed );// as React.ComponentClass<{}>;

// const mapStateToProps: MapStateToPropsParam<SideNavProps, {}, RootState> = (state) => ({
//     monitorPageFlag: state.sideNav.monitorPageFlag
// });

export const SideNavContainer = connect<SideNavProps, {},
{}, RootState>(null, mapDispatchToProps)(SideNavContainerFixed); 

{/* <SideNavContainer /> */}