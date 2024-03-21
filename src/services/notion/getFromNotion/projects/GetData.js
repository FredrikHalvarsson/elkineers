import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetData = (database) =>{ 
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDataFromNotion = ()=>{
        const payload = {
        };
        axios.get(`http://localhost:3001/notion/api/get/${database}`, payload)
            .then(response => {
                setData(response.data);
                setLoading(false); 
                console.log('Data hämtad från Notion:', response.data);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
                console.error('Fel vid hämtning från Notion:', error);
            });
    };      
         
    useEffect(() => {
    fetchDataFromNotion();
    }, []);
    
    if (loading) {
      return <p>Laddar data...</p>;
    }
    if (error || !Array.isArray(data?.results)) {
      return <p>Ett fel uppstod vid hämtning av data från Notion.</p>;
    }
    console.log('sending data: '+data)
    return data
}
export default GetData