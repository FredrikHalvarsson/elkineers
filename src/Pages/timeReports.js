import React from 'react';
import GetTimereports from '../services/notion/getFromNotion/timereports/GetTimereports';
export default function Projects() {
    return (
        <div style={{
            minHeight: '100vh'
        }}>
           <div>
            <GetTimereports />
           </div>
        </div>
    );
}
