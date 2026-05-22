import React from 'react'
import logo from '../assets/logo.png'
import { Coins } from "lucide-react";
const Navbar = () => {
    return (
        <div className='flex justify-between w-4/5 mx-auto items-center p-5'>
            <div><img src={logo} alt="logo" /></div>
            <ul className='flex gap-6 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Team</li>
                <li>Schedules</li>
                <li><button className='flex btn btn-outline items-center justify-center btn-primary'>Coins<Coins /></button></li>
            </ul>
        </div>
    )
}

export default Navbar