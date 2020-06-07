import React from "react"
import { useSelector, useDispatch } from 'react-redux';


const MenuButton = ({ className }) => {
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
      className={`${className} h-full hover:text-teal-300 focus:text-teal-300  focus:outline-none`}
      style={{ transition: 'color 300ms' }}
    >
      {!mobileMenuVisible ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </button>
  )
}

export default MenuButton
