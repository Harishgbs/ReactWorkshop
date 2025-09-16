import React from 'react'
function EventHandling() {
    function DetectChange(x){
        console.log(x.target.value)
    }
  return (
    <>
    <div className='OnclickDemo'>
        <button onClick={()=>alert("you clicked the button")}>Click me</button>
    </div>
    <div className='OnChangeDemo'>
        <input type="text" onChange={(x)=>DetectChange(x)} placeholder='Enter some thing'/>
    </div>
    </>
  )
}

export default EventHandling