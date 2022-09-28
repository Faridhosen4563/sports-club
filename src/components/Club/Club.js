import React, { useEffect, useState } from 'react';
import Head from '../Header/Head';

const Main = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch("sports.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <Head></Head>
            <h2 className='mt-8 font-medium text-xl'>Select today’s sports</h2>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Main;