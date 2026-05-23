import React from 'react'

const AvailavlePlayer = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-md">
                <figure>
                    <img
                        src={data.playerImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.playerName}
                        <div className="badge badge-secondary">{data.playerCountry}</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailavlePlayer