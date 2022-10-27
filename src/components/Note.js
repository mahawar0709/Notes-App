import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
export default function Note() {
  return (
    <div className="note">
        <span>Hello this is our first note</span>
        <div className="footer">
            <small>13/04/4483</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
            
        </div>
    </div>
  )
}
