import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import img from '../../image/farid.png'

const MyDetail = () => {
    return (
        <div className='flex items-center'>
            <img src={img} alt="" className='w-16 h-16 border border-stone-400 rounded-2xl' />
            <div className='ml-4'>
                <h1 className='text-xl font-medium'>Farid Hosen</h1>
                <h2 className='text-lg'><small><FontAwesomeIcon icon={faBriefcase} /> Future Web developer</small></h2>
            </div>
        </div>
    );
};

export default MyDetail;