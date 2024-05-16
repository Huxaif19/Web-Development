import React from 'react'
import download from './../../../assets/download.png'
import video from './../../../assets/video.png'
import edit from './../../../assets/edit.png'
import more from './../../../assets/more.png'
function UserInfo() {
  return (
    <div className='text-2xl flex items-center gap-0 p-2 justify-between'>
        <div className='flex gap-2 '>
            <img src={download}alt="logo"  className='rounded-full w-10 h-10 object-cover'/>
            <h2 className='py-1'>Huxaif shah</h2>
        </div>
        <div className='flex gap-5 ml-3 pr-9'>
            <img src={more} alt="" className='w-6 h-6'/>
            <img src={video} alt="" className='w-6 h-6'/>
            <img src={edit} alt="" className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default UserInfo