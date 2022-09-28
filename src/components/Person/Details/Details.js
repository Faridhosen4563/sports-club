import React from 'react';

const Details = () => {
    return (
        <div className='my-8 bg-slate-300 py-2 px-4 grid grid-cols-3 gap-4 rounded-md'>
            <div>
                <h2><span className='text-2xl font-medium'>60</span><small>kg</small></h2>
                <p>Weight</p>
            </div>
            <div>
                <h2 className='text-2xl font-medium'>5.5</h2>
                <p>Height</p>
            </div>
            <div>
                <h2><span className='text-2xl font-medium'>23</span><small>years</small></h2>
                <p>Age</p>
            </div>
        </div>
    );
};

export default Details;