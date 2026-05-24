
import { Suspense, useState } from 'react';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Player from './components/Player';

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
function App() {
  const playerPromise = fetchPlayer();
  const [coin,setCoin]=useState(10000000)
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<span class="loading loading-spinner text-primary"></span>}>
        <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Player>
      </Suspense>
    </>
  )
}

export default App
