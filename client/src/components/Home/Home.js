import React, {useEffect, useState} from 'react';
import API from '../../utils/API';

function Home() {
    const [trending, setTrending] = useState();
    //When user logs in, show them trending movies
    useEffect(() => {
        const data = API.trending
        data.then((response => setTrending(response)))
        return data
    })

    return <>
       <div>{trending}</div>
    </>
}

export default Home;