import {useEffect, useState} from 'react';
import axios from 'axios';

export default function UseApi(url){
    const [data, setData] = useState();

    useEffect(() =>{
        axios.get(url)
        .then((response) => {
            setData(response.data)
        })
    },[])

    return { data }
};
