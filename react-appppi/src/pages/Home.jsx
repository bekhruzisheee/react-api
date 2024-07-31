import React from 'react'
import Getcars from '../components/getCars/Getcars'
// import Getpors from '../components/getPors/Getpors'
import { useState } from 'react'
import Scrollby from '../components/slider/Scrollby'

function Home() {
const [data, setData] = useState([])
  return (
    <div>
      <Getcars setData={setData} data={data}/>
      <Scrollby/>
    </div>
  )
}

export default Home