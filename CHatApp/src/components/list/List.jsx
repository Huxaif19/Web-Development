import React from 'react'
import UserInfo from './userinfo/UserInfo'
import ChatList from './chatlist/ChatList'
function List() {
  return (
    <div className='flex-2 flex flex-col'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List