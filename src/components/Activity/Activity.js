import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Playing from '../Playing/Playing';
import Details from '../Person/Details/Details';
import Person from '../Person/Person';
import Swal from 'sweetalert2'

const Select = ({ cart }) => {
    const [time, setTime] = useState(JSON.parse(localStorage.getItem('time')))
    const selectTime = selectedTime => {
        setTime(selectedTime);
    }
    useEffect(() => {
        localStorage.setItem('time', JSON.stringify(time))
    }, [time])

    const handelActivity = () => {
        Swal.fire(
            'Good job!',
            'Activity Completed!',
            'success'
        )
    }


    return (
        <div className='mx-4 my-6'>
            <Person></Person>
            <Details></Details>
            <p className='my-4 text-lg font-medium'>Add A Break</p>
            <Break selectTime={selectTime} ></Break>
            <Playing cart={cart} breakTime={time}></Playing>

            <div className='text-white mb-12 lg:mb-20'>
                <button onClick={() => handelActivity()} className="btn btn-outline w-full font-bold">Activity Completed</button>
            </div>

        </div>
    );
};

export default Select;