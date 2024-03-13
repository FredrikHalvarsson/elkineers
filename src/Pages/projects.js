import React from 'react';
import GetAllProjects from '../services/notion/getFromNotion/projects/GetAllProjects';
export default function Projects() {
    return (
        <div style={{
            minHeight: '100vh'
        }}>
           <div>
            <GetAllProjects />
           </div>
        </div>
    );
}
