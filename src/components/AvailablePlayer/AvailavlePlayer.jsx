import React from 'react'

const AvailavlePlayer = ({ data }) => {
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
                        <div className="badge badge-secondary">{data.playerCountry}</div>
                    </h2>
                    <p className="text-sm text-base-content/70">
                        A card component has a figure, a body part, and inside body there are title and actions parts
                    </p>
                    <div className="card-actions justify-end mt-2">
                        <div className="btn btn-outline btn-success btn-sm sm:btn-md">Add</div>
                        <div className="btn btn-outline btn-error btn-sm sm:btn-md">Remove</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailavlePlayer