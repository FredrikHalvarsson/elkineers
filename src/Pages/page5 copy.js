import React, { useEffect } from 'react';
import saveToNotion from '../services/notion/saveToNotion/saveToNotion';


export default function Page5() {
    useEffect(() => {
        function attachSubmitListener() {
            const notionForm = document.getElementById('notionForm');
            notionForm.addEventListener('submit', async function (event) {
                event.preventDefault();
                //const date = document.getElementById('Date').value;
                //let dateObj = new Date(date);
                //let isoDate = dateObj.toISOString();
                const person = document.getElementById('Person').value;
                const hours = document.getElementById('Hours').value;
                const project = document.getElementById('Project').value;
                const note = document.getElementById('Note').value;

                const data = {
                    Person : person,
                    Hours : hours,
                    Project : project,
                    Note : note,

                }
                //console.log(  person, hours, project, note );
                
                //console.log('data', data);  
                await saveToNotion(person);

            });
        }

        attachSubmitListener(); // Call the function to attach the event listener

        // Clean up the event listener when component unmounts
        return () => {
            const notionForm = document.getElementById('notionForm');
            notionForm.removeEventListener('submit', () => {});
        };
    }, []);

    return (
        <div>
            <main style={{
                minHeight: '100vh',
            }}>
                <div style={{
                    marginLeft: '350px',
                    width: '60%',
                }}>
                    <form id="notionForm">
                        <input type="text" id="Person" placeholder="Enter your name" />
                        <input type="text" id="Hours" placeholder="Enter your Hours" />
                        <input type="text" id="Project" placeholder="Enter your Project" />
                        <input type="text" id="Note" placeholder="Enter your Note" />
                        <input type="text" id="Date" placeholder="Enter your Note" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </div>
    );
}
