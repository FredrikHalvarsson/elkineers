import React from 'react';
import GetAllProjects from '../components/GetAllProjects';
export default function Projects() {
    return (
        <div>
            <main style={{
            minHeight: '100vh'
        }}>
           <div>
            <GetAllProjects />
           </div>
        </main>
        </div>
    );
}
