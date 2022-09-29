import React from 'react';

const Break = ({ selectTime }) => {
    return (
        <div className='my-8 bg-slate-300 py-2 px-4 rounded-md grid grid-cols-5 gap-4'>
            <button onClick={(e) => selectTime(e.target.value)} className="btn btn-outline  rounded-full font-bold" value={10}>10</button>
            <button onClick={(e) => selectTime(e.target.value)} className="btn btn-outline  rounded-full font-bold" value={20}>20</button>
            <button onClick={(e) => selectTime(e.target.value)} className="btn btn-outline  rounded-full font-bold" value={30}>30</button>
            <button onClick={(e) => selectTime(e.target.value)} className="btn btn-outline  rounded-full font-bold" value={40}>40</button>
            <button onClick={(e) => selectTime(e.target.value)} className="btn btn-outline  rounded-full font-bold" value={50}>50</button>
        </div>
    );
};

export default Break;