import React, { useState } from 'react'
import search from './../../../assets/search.png'
import plus from './../../../assets/plus.png'
import minus from './../../../assets/minus.png'
import download from './../../../assets/download.png'
function ChatList() {
    const [addIcon , setAddIcon] = useState(false)
  return (
    <div className='flex-1 overflow-scroll overflow-x-hidden overflow-y-auto '>
        <div className='flex gap-3 p-4 flex-1'>
            <div className='flex-1 flex  gap-3 items-center rounded-md bg-gray-400/30'>
                <img src={search} alt="search icon" className='w-4 h-4 ml-2 cursor-pointer'/>
                <input type="text" placeholder='search here .....' className='outline-none bg-transparent flex-1'/>
            </div>
            <button onClick={()=>setAddIcon(prev =>!prev)}><img src={addIcon ?minus :plus} alt="add contact" className='w-7 h-7 mr-7 bg-lime-500/50 rounded-md p-1' onClick={(prev)=>!prev}/></button>
        </div>
        <div className='flex gap-2 flex-col ml-4'>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
            <div className='flex items-center gap-2 border-b border-gray-300'>
                <img src={download} alt="avatar img" className='w-8 h-8 rounded-full object-cover'/>
                <div className='flex flex-col gap-2'>
                    <span className='font-semibold'>huxaif shah</span>
                    <p className='font-light'>Hello</p>
                </div>
            </div>
        </div>
    </div>
   )
}

export default ChatList