import React from 'react';
import GetMyProjects from '../services/notion/getFromNotion/projects/GetMyProjects'

export default function Page4 () {
    return (
    <div style={{
        minHeight: '100vh'
    }}>
        <GetMyProjects/>
    </div>
    )
}