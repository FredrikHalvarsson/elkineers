import React, { useEffect } from 'react';
import saveToNotion from '../services/notion/saveToNotion/saveToNotion';

export default function Page5() {
    useEffect(() => {
        const notionForm = document.getElementById('notionForm');
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const person = document.getElementById('Person').value;
            const email = document.getElementById('Email').value;
            console.log('person: ' + person);
            const data = {
                properties: {
                    Email: {
                        email: email
                    },
                    Name: {
                        title: [{
                            text: {
                                content: person
                            },
                            plain_text: person
                        }]
                    }
                }
            };
            console.log('Sending data to saveToNotion:', data);
            try {
                await saveToNotion(data, 'people');
            } catch (error) {
                console.error('Failed to save data to Notion:', error);
            }
            console.log("Data successfully sent to saveToNotion");
        };
    
        notionForm.addEventListener('submit', handleSubmit);
    
        // Clean up the event listener when component unmounts
        return () => {
            notionForm.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <div>
            <main style={{ minHeight: '100vh' }}>
                <div style={{ marginLeft: '350px', width: '60%' }}>
                    <form id="notionForm">
                        <input type="text" id="Person" placeholder="Enter your name" />
                        <input type="text" id="Email" placeholder="Enter your email" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </div>
    );
}