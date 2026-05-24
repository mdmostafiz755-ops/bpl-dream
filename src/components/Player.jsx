import { use, useState } from "react";
import AvailavlePlayer from "./AvailablePlayer/AvailavlePlayer";
import SelectedPlayer from "./selectedPlayer/SelectedPlayer";

const Player = ({ playerPromise }) => {
  const data = use(playerPromise);

  // true = Available, false = Selected
  const [isAvailable, setIsAvailable] = useState(true);

  const handleToggle = () => {
    setIsAvailable(prev => !prev);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-2xl">
          {isAvailable ? "Available Players" : "Selected Players"}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={handleToggle}
            className={`btn ${!isAvailable ? "btn-success" : "btn-nutral"}`}
          >
            Selected
          </button>

          <button
            onClick={handleToggle}
            className={`btn ${isAvailable ? "btn-success" : "btn-nutral"}`}
          >
            Available
          </button>
        </div>
      </div>

      {/* Grid */}
      {
        isAvailable ? <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((avPlayer, index) => (
          <AvailavlePlayer key={index} data={avPlayer} />
        ))}
      </div> : <SelectedPlayer></SelectedPlayer> 
      }
      
    </div>
  );
};

export default Player;