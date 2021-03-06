import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function Home({ user }) {
    // const [trending, setTrending] = useState();

    // //When user logs in, show them trending movies
    // useEffect(() => {
    //     API.trending()
    //         .then((response => setTrending(response)))
    // })


    return <>
        {/* <div>{JSON.stringify(trending)}</div> */}
        <h1>Home!</h1>

    </>
}

export default Home;