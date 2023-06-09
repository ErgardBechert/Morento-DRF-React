import React from 'react'
import './formInput.scss'

export default function FormInput({placeholder, onChangeFunc, value}) {
  return (
    <input 
      className='input'
      type="text" 
      onChange={onChangeFunc?(e) => onChangeFunc(e): () => {}}
      placeholder={placeholder}
      value={value}
    />
  )
}
