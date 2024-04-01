// import React, { useEffect } from 'react';
import GetId from '../../clerk/GetUser/GetId';
import saveToNotion from './saveToNotion';
const { format } = require('date-fns');

//This is currently not in use, it has been incorporated into ReportTime.js
export default function PostTimeReports(hours, project, note) {
    const userId = GetId();
    const date = format(new Date(), 'yyy.MM.dd').toString();

    async function SendData() {
        const data = {
            properties: {
                Hours: {
                    number: hours
                },
                Date: {
                    date: {
                        start: date
                    }
                },
                Project: {
                    relation: [{
                        id: project //select project
                    }]
                },
                Person: {
                    relation: [{
                        id: userId
                    }]
                },
                Note: {
                    title: [{
                        text: {
                            content: note
                        }
                    }]
                }
            }
        }
        await saveToNotion(data, 'timereports');
    }

    SendData();
}

//**************************** -Add this to listen on ReportTime modal- ********************************************* */
//
// useEffect(() => {
//     const notionForm = document.getElementById('notionForm');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const hours = document.getElementById('hours').value
//         const project = document.getElementById('project').value
//         const note = document.getElementById('note').value
//         console.log('person: ' + person);
//         PostTimeReports(hours, project, note)
//         console.log('Sending data to saveToNotion:', data);
//         try {
//             await saveToNotion(data, 'people');
//         } catch (error) {
//             console.error('Failed to save data to Notion:', error);
//         }
//         console.log("Data successfully sent to saveToNotion");
//     };

//     notionForm.addEventListener('submit', handleSubmit);

//     return () => {
//         notionForm.removeEventListener('submit', handleSubmit);
//     };
// }, []);