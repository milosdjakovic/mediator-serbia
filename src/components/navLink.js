import React from 'react';
import { Link } from "gatsby"

const NavLink = ({ route, text, className }) => (
  <Link
    to={`${route}`}
    activeClassName="rounded-md svg-state text-teal-400"
    className={`${className} flex items-center py-1 my-1 hover:underline`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="hidden icon icon-tabler icon-tabler-point"
      width="18"
      height="20"
      style={{ marginLeft: '-18px' }}
      viewBox="0 0 12 24"
      strokeWidth="2.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="2" cy="12" r="4" fill="currentColor" />
    </svg>
    {text}
  </Link>
)

export default NavLink;