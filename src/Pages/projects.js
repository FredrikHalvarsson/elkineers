import * as React from 'react';
import GetAllProjects from '../services/notion/getFromNotion/projects/GetAllProjects';
import GetActiveProjects from '../services/notion/getFromNotion/projects/GetActiveProjects';
import GetUserProjects from '../services/notion/getFromNotion/projects/GetUserProjects';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { TabPanel } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Typography, Stack,} from '@mui/material';


export default function Projects() {
    return (
        <div style={{
            minHeight: '100vh',
            marginLeft: '250px',
            marginRight: '25px'
           
            
        }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', }} spacing="10px" direction="row" marginTop="-50px">
        <img
          src="https://purecodestorageprod.blob.core.windows.net/images-svg/WorkspaceSetting1_b124193e-6efe-4644-a2b8-357599b30419.svg"
          width="35px"
          height="35px"
        />
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
            p: 0.5,
            gap: 0.5,
            borderRadius: '10px 10px 0px 0px',
            bgcolor: 'background.level3',
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
                boxShadow: 'sm',
                bgcolor: 'background.surface',
            },
            }}
        >
            <Tab disableIndicator>All </Tab>
            <Tab disableIndicator>Active </Tab>
            <Tab disableIndicator>My </Tab>
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
