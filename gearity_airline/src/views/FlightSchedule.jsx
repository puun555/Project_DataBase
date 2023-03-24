import { Box, Tab, Tabs,Typography } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import './FlightSchedule.css'
// componets
import FlightDetail from './FlightDetail';
import PassInFormation from './PassInformation';
import Seat from './Seat';
import Meat from './Meat';
const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
  const TabG = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: ${blue[800]};
    }

    &:focus {
        color: #fff;
        outline: 3px solid ${blue[200]};
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #fff;
        color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }`;
    const TabPanel = styled(TabPanelUnstyled)(
        ({ theme }) => `
        width: 90%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        padding: 20px 12px;
        background-color: ${blue[800]};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        border-radius: 12px;
        
        `,
      );
    const TabsList = styled(TabsListUnstyled)(
        ({ theme }) => `
        width:90%;
        background-color: ${blue[900]};
        border-radius: 12px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-between;
        position:relative;
        left: 50%,
        top: 50%;
        `,
      );
const FlightSchedule = () =>{
    const [value, setValue] = useState('1');
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    }
    return(
        <>
            <div className='container'>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <TabG>Flight Schedule</TabG>
                    <TabG>Passenger information</TabG>
                    <TabG>Seat</TabG>   
                    <TabG>Meat</TabG>
                    <TabG>Paymnet</TabG>
                </TabsList>
                <TabPanel value={0} component="div"><FlightDetail></FlightDetail></TabPanel>
                <TabPanel value={1} component="div"><PassInFormation></PassInFormation></TabPanel>
                <TabPanel value={2} component="div"><Seat></Seat></TabPanel>
                <TabPanel value={3} component="div" ><Meat></Meat></TabPanel>
                <TabPanel value={4}>Language page</TabPanel>
            </TabsUnstyled>
            </div>
        </>
    )
}
export default FlightSchedule