import React from 'react';
import GetTimereports from '../services/notion/getFromNotion/timereports/GetTimereports';
export default function Timereports() {
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
// this should be named timereports with no capittal letters