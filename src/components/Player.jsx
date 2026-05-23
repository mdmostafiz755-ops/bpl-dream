import { use } from "react";
import AvailavlePlayer from "./AvailablePlayer/AvailavlePlayer";

const Player = ({ playerPromise }) => {
  const data = use(playerPromise);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((avPlayer, index) => (
          <AvailavlePlayer key={index} data={avPlayer} />
        ))}
      </div>
    </div>
  );
};

export default Player;