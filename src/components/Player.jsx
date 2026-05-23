import { use } from "react";
import AvailavlePlayer from "./AvailablePlayer/AvailavlePlayer";

const Player = ({ playerPromise }) => {
  const data = use(playerPromise);
  // console.log(data);

  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 place-items-center'>
      {
        data.map((avPlayer, index) => (
          <AvailavlePlayer data={avPlayer} key={index}></AvailavlePlayer>
        )
        )
      }
    </div>
  )
};

export default Player;