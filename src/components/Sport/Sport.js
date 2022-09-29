import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Sport = ({ sport, handelAddToList }) => {
    const { img, name, time } = sport;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-44" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Playing Time : {time} min</p>
                <div className="card-actions mt-2">
                    <button onClick={() => handelAddToList(sport)} className="btn btn-outline  w-full">Add To List <FontAwesomeIcon className='ml-4' icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Sport;