import * as React from 'react';
import GetAllProjects from '../services/notion/getFromNotion/projects/GetAllProjects';
import GetActiveProjects from '../services/notion/getFromNotion/projects/GetActiveProjects';
import GetUserProjects from '../services/notion/getFromNotion/projects/GetUserProjects';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { TabPanel } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Typography, Stack,} from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

export default function Projects() {
    return (
        <div style={{
            minHeight: '100vh',
            marginLeft: '250px',
            marginRight: '25px',
            marginTop: '100px' 
        }}>
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', }} spacing="10px" direction="row" marginTop="-50px">
            <AssignmentOutlinedIcon sx={{fontSize: 50 }} />
            <Typography
            variant="h3"
            sx={{ ' @media(max-width:479px)': { fontSize: '14px' } }}>
            Projects
            </Typography>
        </Stack>
        <Tabs selectionFollowsFocus aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'smoke', border: 'solid 1px',borderColor: 'lightgray', borderRadius: '13px' }}>
        <TabList
            disableUnderline
            sx={{
            alignItems: 'center', 
            justifyContent: 'center',
            paddingTop: 0.5,
            gap: 0.5,
            borderRadius: '10px 10px 0px 0px',
            bgcolor: 'background.level3',
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
                // boxShadow: 'sm',
                bgcolor: 'background.surface',
            },
            }}>
            <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>All </Tab>
            <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>Active </Tab>
            <Tab disableIndicator sx={{borderRadius: '4px 4px 0px 0px'}}>My </Tab>
        </TabList>
        <TabPanel value={0} >       
            <div>
                <GetAllProjects />
            </div>
        </TabPanel>
        <TabPanel value={1}>
            <div>
                <GetActiveProjects />
            </div>
        </TabPanel>
        <TabPanel value={2}>
            <div>
                <GetUserProjects />
            </div>
        </TabPanel>
        </Tabs>
        </div>
    );
}
