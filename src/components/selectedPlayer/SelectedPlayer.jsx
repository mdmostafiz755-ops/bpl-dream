import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayer = ({selectedPlayer,setSelectedPlayer}) => {
    //console.log(selectedPlayer);
    const handleDelete=(p)=>{
        const filteredPlayer=selectedPlayer.filter(player=>player.playerName !=p.playerName);
        console.log(filteredPlayer)
    }
  return (
    <div>
        {
            selectedPlayer.map((p,index)=>{
                return <div key={index} className='flex items-center gap-4 justify-between p-10 
                rounded-2xl bg-amber-50 outline-1 outline-black mb-4 mt-3'>
                    <div className='flex gap-6 items-center'>
                        <img src={p.playerImage} alt="" className='h-[75px] w-auto rounded-md' />
                        <div className=''>
                            <h2 className='flex items-center gap-2 font-bold 
                            text-3xl'><FaUser />{p.playerName}</h2>
                            <p>{p.playerType}</p>
                        </div>
                    </div>
                    <button className='cursor-pointer 
                    btn text-red-500' onClick={()=>handleDelete(p)}><MdDelete 
                    className='scale-[2]' /></button>
                </div>
            })
        }
    </div>
  )
}

export default SelectedPlayer