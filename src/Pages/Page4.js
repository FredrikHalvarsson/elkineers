import React, { useEffect } from 'react';
// import saveToNotion from '../services/notion/saveToNotion/saveToNotion.js';
// import GetId from '../services/clerk/GetUser/GetId.js';
// import { useState } from 'react';
// const { format } = require('date-fns');
import WeekPicker from '../components/Modals/WeekPickerMD/WeekPicker.js';


export default function Page4 () {
    return (
        <div style={{marginLeft: '300px',marginTop:'100px', minHeight: '100vh'}}>
            <WeekPicker />

        </div>
    );
    // const [hours, setHours] = useState ("");
    // const [project, setProject] = useState("");
    // const [note, setNote] = useState("");
    // const userId = GetId();
    // let date = format(new Date(), 'yyy.MM.dd');
    // date = new Date().toISOString(date).split('T', 1)[0];
   
    // useEffect(() => {
    // const notionTimeForm = document.getElementById('notionTimeForm');

    //     const handleSubmit = async (event) => {
    //         event.preventDefault();
    //         let hours = document.getElementById('Hours').value;
    //         hours = parseInt(hours);
    //         const project = document.getElementById('Project').value;
    //         const note = document.getElementById('Note').value;
            
    //         console.log('hours: ' + hours);
    //         console.log(typeof hours)
    //         console.log('projectId: ' + project);
    //         console.log('note: ' + note);
    //         console.log('userID: ' + userId);
    //         console.log(typeof userId);
    //         console.log('date: ' + date);

    //         const data = {
    //             properties: {
    //                 Hours: {
    //                     number: hours
    //                 },
    //                 Date: {
    //                     date: {
    //                         start: date
    //                     }
    //                 },
    //                 Project: {
    //                     relation: [{
    //                         id: project //select project
    //                     }]
    //                 },
    //                 Person: {
    //                     relation: [{
    //                         id: userId
    //                     }]
    //                 },
    //                 Note: {
    //                     title: [{
    //                         text: {
    //                             content: note
    //                         },
    //                         plain_text: note
    //                     }]
    //                 }
    //             }
    //         };
    //         console.log('Sending data to saveToNotion:', data);
    //         try {
    //             await saveToNotion(data, 'timereports');
    //         } catch (error) {
    //             console.error('Failed to save data to Notion:', error);
    //         }
    //         console.log("Data successfully sent to saveToNotion");
    //     };

    //     notionTimeForm.addEventListener('submit', handleSubmit);

    //     return () => {
    //         notionTimeForm.removeEventListener('submit', handleSubmit);
    //     };
    // }, [userId, date]);

    // return (
    // <div>
    //     <main style={{ minHeight: '100vh'}} >
    //         <div style={{ marginLeft: '350px', width: '60%' }}>
    //             <form id="notionTimeForm">  
    //                 <select id="Project" value={project} onChange={(e) => setProject(e.target.value)}>
    //                     <option value="e10f45c9-7cc1-464b-9ceb-fde2a75af439">The Best Project</option>
    //                     <option value="f028a47a-2f79-47e6-bf95-8500eb4d7953">Another Project</option>
    //                 </select>
    //                 <input type="number" id="Hours" value={hours} onChange={(h) => setHours(h.target.valueAsNumber)}/>
    //                 <input type="text" id="Note" value={note} onChange={(n) => setNote(n.target.value)}/>
    //                 <input type="submit" value="Submit"/>
    //             </form>
    //         </div>
    //     </main>
    // </div>
    // );
}
