import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Embed from './components/Embed'
import PropsDemo from './components/PropsDemo'
import EventHandling from './components/EventHandling'
import CondRendDemo from './components/CondRendDemo'
import ListRenderingDemo from './components/ListRenderingDemo'
import Cards from './components/Cards'
function App() {
  return (
    <>
      <Cards name="Ironman" desc="I am Ironman"/>
      <Cards name="Spiderman" desc="I am Spiderman"/>
      <Cards name="Ironman" desc="I am Ironman"/>
      <Cards name="Ironman" desc="I am Ironman"/>
      <Cards name="Ironman" desc="I am Ironman"/>
      <Cards name="Ironman" desc="I am Ironman"/>
      <Cards name="Ironman" desc="I am Ironman"/>
    </>
  )
}
export default App
