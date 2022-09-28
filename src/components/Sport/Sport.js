import React from 'react';

const Sport = ({ sport }) => {
    console.log(sport);
    const { img, name, time } = sport;
    console.log(img);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-44" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Playing Time : {time} min</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-outline btn-primary w-full">Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Sport;