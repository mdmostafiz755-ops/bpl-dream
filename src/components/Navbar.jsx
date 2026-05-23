import React from 'react'
import logo from '../assets/logo.png'
import { Coins } from "lucide-react";
const Navbar = () => {
    return (
        <div className='flex justify-between mx-auto items-center p-5'>
            <div><img src={logo} alt="logo" /></div>
            <ul className='flex gap-8 items-center cursor-pointer'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Team</li>
                <li>Schedules</li>
                <li><button className='flex btn btn-outline items-center justify-center btn-primary'>4300 Coins<Coins /></button></li>
            </ul>
        </div>
    )
}

export default Navbar