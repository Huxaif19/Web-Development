import React from 'react'
import Options from '../Options/Options'

function Quiz() {
  return (
    <>
        <div className='flex flex-col'>
            <hr />
            Quiz
            <hr className='mb-3' />
            <Options text = {'hello'}/>

        </div>
    </>
    
  )
}

export default Quiz