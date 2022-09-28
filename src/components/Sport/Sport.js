import React from 'react';

const Sport = ({ sport }) => {
    console.log(sport);
    const { img, name, time } = sport;
    console.log(img);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Time : {time} min</p>
                <div className="card-actions">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Sport;