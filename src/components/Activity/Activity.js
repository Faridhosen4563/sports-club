import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Playing from '../Playing/Playing';
import Details from '../Person/Details/Details';
import Person from '../Person/Person';

const Select = ({ cart }) => {
    const [time, setTime] = useState(0)
    const selectTime = selectedTime => {
        setTime(selectedTime);
    }


    return (
        <div className='mx-4 my-6'>
            <Person></Person>
            <Details></Details>
            <p className='my-4 text-lg font-medium'>Add A Break</p>
            <Break selectTime={selectTime} ></Break>
            <Playing cart={cart} time={time}></Playing>

            <div className='text-white mb-12 lg:mb-20'>
                <button className="btn btn-outline btn-primary w-full font-bold">Activity Completed</button>
            </div>

        </div>
    );
};

export default Select;