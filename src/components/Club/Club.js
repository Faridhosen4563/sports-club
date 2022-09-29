import React, { useEffect, useState } from 'react';
import Head from '../Header/Head';
import QuestionAns from '../QuestionAns/QuestionAns';
import Sport from '../Sport/Sport';

const Club = ({ handelAddToList }) => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch("sports.json")
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <Head></Head>
            <h2 className='mt-8 font-medium text-xl text-white'>Select today’s playing sports</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    sports.map(sport => <Sport
                        key={sport.id}
                        sport={sport}
                        handelAddToList={handelAddToList}
                    ></Sport>)
                }
            </div>
            <QuestionAns></QuestionAns>
        </div>
    );
};

export default Club;