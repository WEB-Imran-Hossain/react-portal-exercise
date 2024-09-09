import React, { useState } from 'react'
import ModalContentOne from './ModalContentOne';

const TraditionalModal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative  mb-5 p-2 w-64 h-40 overflow-hidden">
        <button
            className="bg-blue-400 text-white p-1 border rounded-md"
            onClick={()=>setShowModal(true)}
        >Show the Traditional Modal</button>
        {
          showModal && (
            <ModalContentOne onClose={()=>setShowModal(false)} />
          )
        }
        
    </div>
  )
}

export default TraditionalModal