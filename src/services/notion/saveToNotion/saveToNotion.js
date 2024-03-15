import axios from 'axios';

export default async function saveToNotion(name) {
    try {
        const response = await axios.post(
            'http://localhost:3001/notion/api/post/people', 
            {body: JSON.stringify({ name })},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Notion-Version': '2022-06-28'
                }
            }
        );
        alert(response.data.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to save data to Notion.');
    }
}