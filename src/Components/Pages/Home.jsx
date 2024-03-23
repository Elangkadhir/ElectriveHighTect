import React from 'react'
import Layouts from "../Layouts/Layouts"
import sm1 from "../../Assets/latestbanner-1.jpg"
import sm2 from "../../Assets/latestbanner-2.jpg"

function Home() {
  return (
<Layouts>
    <div className='grid grid-cols-4 gap-8 h-full'>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm1})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm2})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm1})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm2})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm2})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm1})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm2})`}}></div>
    <div className='bg-white rounded-md bg-contain h-72' style={{backgroundImage : `url(${sm1})`}}></div>
  </div>
</Layouts>  )
}

export default Home