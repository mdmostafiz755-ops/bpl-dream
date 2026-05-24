import React, { useState } from 'react'

const AvailavlePlayer = ({ data, setCoin, coin }) => {
    const [added, setAdded] = useState(false);

    const handleToggle = () => {
        setAdded(prev => !prev);
    };

    return (
        <div className="w-full">
            <div className="card bg-base-100 w-full shadow-md">

                <figure className="aspect-square overflow-hidden">
                    <img
                        src={data.playerImage}
                        alt={data.playerName}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body p-4">

                    <h2 className="card-title text-base sm:text-lg flex-wrap gap-2">
                        {data.playerName}

                        <div className="badge badge-secondary">
                            {data.playerCountry}
                        </div>
                    </h2>

                    <p className="text-sm text-base-content/70">
                        A card component has a figure, a body part,
                        and inside body there are title and actions parts
                    </p>

                    <div className="card-actions justify-end mt-2">
                        <button
                            className={`btn btn-sm sm:btn-md ${
                                added
                                    ? "btn-outline btn-error"
                                    : "btn-outline btn-success"
                            }`}
                            onClick={() => {
                                handleToggle();

                                if (!added) {
                                    setCoin(prev => prev - data.price);
                                } else {
                                    setCoin(prev => prev + data.price);
                                }
                            }}
                        >
                            {added ? "Remove" : "Add"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AvailavlePlayer