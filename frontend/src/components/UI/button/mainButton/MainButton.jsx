import React from 'react'



export default function MainButton({children, onClickFunk}) {
  
  
  return (
    
      <button
        className='button button-primary'
        
        onClick={onClickFunk ? () => onClickFunk() : () => {}}
        >
        {children}
      </button>
  

  )
}
