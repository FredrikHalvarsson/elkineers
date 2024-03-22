import React from 'react';
import PostTimeReports from '../services/notion/saveToNotion/PostTimereport';

export default function Page3 () {
    const hours = 5;
    const project = "e10f45c9-7cc1-464b-9ceb-fde2a75af439";
    const note = 'test';
    const handleClick = async () => {
        try {
            await PostTimeReports(hours, project, note);
            console.log('Time report submitted successfully');
        } catch (error) {
            console.error('Error submitting time report:', error);
        }
    };
    return (
        <div style={{
            minHeight: '100vh',
            marginLeft: '350px',
            width: '60%',
        }}>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button onClick={handleClick}>Submit Report</button>
        </div>
    )
}
