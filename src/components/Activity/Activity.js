import React from 'react';
import Break from '../Break/Break';
import Playing from '../Playing/Playing';
import Details from '../Person/Details/Details';
import Person from '../Person/Person';

const Select = ({ cart }) => {
    return (
        <div className='mx-4 my-6'>
            <Person></Person>
            <Details></Details>
            <p className='my-4 text-lg font-medium'>Add A Break</p>
            <Break></Break>
            <Playing cart={cart}></Playing>

            <div className='text-white'>
                <button className="btn btn-outline btn-primary w-full font-bold">Activity Completed</button>
            </div>

        </div>
    );
};

export default Select;