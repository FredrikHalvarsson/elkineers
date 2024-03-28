import axios from 'axios';

export default async function saveToNotion(data, database) {
    
    console.log('saveToNotion recieved data: ',data)
    try {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        } else if (typeof data !== 'object') {
            throw new Error('Invalid data type. Expected object or JSON string.');
        }
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/notion/api/post/${database}`,
            data,
            {
                headers: {
                    'Notion-Version': '2022-06-28'
                }
            }
        );
        console.log(response.data.message); // Use console.log for debugging purposes
    } catch (error) {
        console.error('Error:', error);
        console.error('Failed to save data to Notion.');
    }
}