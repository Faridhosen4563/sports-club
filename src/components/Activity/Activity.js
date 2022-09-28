import React from 'react';
import Break from '../Break/Break';
import Details from '../Person/Details/Details';
import Person from '../Person/Person';

const Select = () => {
    return (
        <div className='mx-4 my-6'>
            <Person></Person>
            <Details></Details>
            <p className='my-4 text-lg font-medium'>Add A Break</p>
            <Break></Break>

        </div>
    );
};

export default Select;