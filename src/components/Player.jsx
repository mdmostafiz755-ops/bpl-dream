import { use } from "react";


const Player = ({ playerPromise }) => {
  const data = use(playerPromise);
  console.log(data);

  return(
    <div>
        player
    </div>
  )
};

export default Player;