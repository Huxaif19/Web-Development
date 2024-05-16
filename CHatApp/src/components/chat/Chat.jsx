import React from 'react'
import download from './../../assets/download.png'
import phone from './../../assets/phone.png'
import info from './../../assets/info.png'
import video from './../../assets/video.png'
import  emoji from './../../assets/emoji.png'
import  mic from './../../assets/mic.png'
import  images from './../../assets/images.png'
import  camera from './../../assets/camera.png'

function Chat() {
  return (
    <div className='flex-1  border-l border-r border-gray-400'>
      <div className='flex p-4 border-b ring-gray-50 justify-between items-center'>
        <div className='flex items-center gap-4'>
          <img src={download} alt="" className='w-8 h-8  rounded-full object-cover'/>
          <div className=''>
            <span>huxaif shah</span>
            <p className=''>Lorem, ipsum dolor</p>
          </div>
        </div>
        <div className='flex gap-8 '>
          <img src={phone} alt="" className='w-8 h-8  rounded-sm object-cover'/>
          <img src={video} alt="" className='w-8 h-8  rounded-sm object-cover'/>
          <img src={info} alt="" className='w-8 h-8  rounded-md object-cover'/>
        </div>
      </div>
      <div className='middle'></div>
      <div className='bottom flex gap-4 justify-between items-center border-b border-sky-300/4'>
        <div className='icons flex gap-2'>
          <img src={images} alt="" className='w-7 h-7 rounded-md'/>
          <img src={mic}alt="" className='w-7 h-7 rounded-md'/>
          <img src={camera} alt="" className='w-7 h-7 rounded-md'/>
        </div>
        <input type="text" placeholder='type a message' className='outline-none '/>
          <div className='emoji'>
            <img src={emoji} alt="" className='w-7 h-7 rounded-md'/>
          </div>
      </div>
    </div>
  )
}

export default Chat