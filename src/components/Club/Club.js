import React, { useEffect, useState } from 'react';
import Head from '../Header/Head';
import Sport from '../Sport/Sport';

const Main = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch("sports.json")
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <Head></Head>
            <h2 className='mt-8 font-medium text-xl'>Select today’s sports</h2>
            <div>
                {
                    sports.map(sport => <Sport
                        key={sport.id}
                        sport={sport}
                    ></Sport>)
                }
            </div>
        </div>
    );
};

export default Main;