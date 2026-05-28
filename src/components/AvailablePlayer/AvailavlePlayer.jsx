import React, { useState } from "react";

const AvailavlePlayer = ({ data, setCoin, coin,setSelectedPlayer,selectedPlayer }) => {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        const willAdd = !added;


        if (willAdd && coin < data.price) {
            alert("Insufficient Coins");
            return;
        }


        setAdded(willAdd);

        setCoin(prev =>
            willAdd ? prev - data.price : prev + data.price
        );
        setSelectedPlayer([...selectedPlayer,data]);
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
                        {data.description || "Player profile information"}
                    </p>

                    <div className="card-actions justify-end mt-2">
                        <button
                            className={`btn btn-sm sm:btn-md ${added
                                    ? "btn-outline btn-error"
                                    : "btn-outline btn-success"
                                }`}
                            onClick={handleClick}
                        >
                            {added ? "Remove" : "Add"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AvailavlePlayer;