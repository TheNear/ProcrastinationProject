import React from 'react'
import ModalPopup from '../ModalPopup'
import { useSelector } from 'react-redux'

export default function ModalPopupGroup() {
  const modal = useSelector(state => state.modalPopupReducer)

  return (
    <div className="modal-popup__group">
      {modal.map(item => {
        
      })}
    </div>
  )
}
