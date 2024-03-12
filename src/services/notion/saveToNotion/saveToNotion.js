import axios from 'axios';
export default async function saveToNotion(data) {

    await axios.post('http://localhost:3001/notion/api/post/timereports', {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to save data to Notion.');
    });
}