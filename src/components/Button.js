import React from 'react'

function Button({label}) {
  return (
    <div>
        <button data-testid='button' className='button'>
            {label}
        </button>
    </div>
  )
}

export default Button