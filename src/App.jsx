
import { Suspense } from 'react';
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
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<span class="loading loading-spinner text-primary"></span>}>
        <Player playerPromise={playerPromise}></Player>
      </Suspense>
    </>
  )
}

export default App
