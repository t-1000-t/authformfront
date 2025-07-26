import React from 'react'
import ModalObject from './ModalObject'

const ModalEdit = ({ isOpen, onClose, onSubmit, text, onChange, initialRef }) => {
  return (
    <ModalObject
      isOpen={isOpen}
      text={text}
      onChange={onChange}
      onSubmit={onSubmit}
      onClose={onClose}
      initialRef={initialRef}
    />
  )
}

export default ModalEdit
