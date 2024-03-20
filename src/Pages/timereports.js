import * as React from 'react';
import TabList from '@mui/joy/TabList';
import { TabPanel } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Typography, Stack,} from '@mui/material';
import Tabs from '@mui/joy/Tabs';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import GetUserTimeReports from '../services/notion/getFromNotion/timereports/GetUserTimeReports';
import GetTimereports from '../services/notion/getFromNotion/timereports/GetTimereports';
import ReportTime from '../components/Modals/TimeReportMD/ReportTime';

export default function Timereports() {
    return (
        <div style={{
            minHeight: '100vh',
            marginLeft: '250px',
            marginRight: '25px', }}>
            
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', }} spacing="10px" direction="row" marginTop="-50px">
                <PendingActionsOutlinedIcon sx={{fontSize: 50 }} />
                <Typography
                variant="h3"
                sx={{ ' @media(max-width:479px)': { fontSize: '14px' } }}>
                Time Reports
                </Typography>
            </Stack>
            <Tabs selectionFollowsFocus aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'smoke', border: 'solid 1px',borderColor: 'lightgray', borderRadius: '13px' }}>
                <TabList disableUnderline
                    sx={{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    // p: 0.5,
                    paddingTop: 0.5,
                    gap: 0.5,
                    borderRadius: '10px 10px 0px 0px',
                    bgcolor: 'background.level3',
                    [`& .${tabClasses.root}[aria-selected="true"]`]: {
                        // boxShadow: 'sm',
                        bgcolor: 'background.surface',
                    },}}>
                    <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>All</Tab>
                    <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>My</Tab>
                    <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>Create</Tab>
                </TabList>
                <TabPanel value={0}>       
                    <div>
                        <GetTimereports />
                    </div>
                </TabPanel>
                <TabPanel value={1}>
                    <div>
                        <GetUserTimeReports />
                    </div>
                </TabPanel>
                <TabPanel value={2}>
                    <div>
                        <ReportTime />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
// this should be named timereports with no capittal letters
