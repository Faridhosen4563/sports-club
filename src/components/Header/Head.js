import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'

const Head = () => {
    return (
        <div className='flex items-center mt-16'>
            <FontAwesomeIcon className='w-8 h-8' icon={faPersonRunning} />
            <p className='text-4xl ml-2 font-bold'>SPORTS-CLUB</p>
        </div>
    );
};

export default Head;