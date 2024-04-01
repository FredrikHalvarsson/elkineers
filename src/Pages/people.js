import React from "react";
import GetPeople from "../services/notion/getFromNotion/people/GetPeople";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { TabPanel } from '@mui/joy';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Typography, Stack,} from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import './home.css';

export default function People () {
    return (
        <div className='tabsContainer'>
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', }} spacing="10px" direction="row" marginTop="-50px">
            <AssignmentOutlinedIcon sx={{fontSize: 50 }} />
            <Typography
            variant="h3"
            sx={{ ' @media(max-width:479px)': { fontSize: '30px' } }}>
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
        </TabList>
        <TabPanel value={0} >       
            <div>
                <GetPeople />
            </div>
        </TabPanel>
        </Tabs>
        </div>
    );
}