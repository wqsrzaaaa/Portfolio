import React from 'react'

const SeeMyworkbtn = ({ label = "See my work" }) => {
  return (
    <span className="cta flex items-center w-fit mt-4 cursor-pointer">
      <span>{label}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </span>
  )
}

export default SeeMyworkbtn