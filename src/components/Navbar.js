import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-20 bg-black text-white flex justify-center">
      <div className="my-auto py-4">
        <Link to="/" className="text-2xl">
          EduardX
        </Link>
      </div>
    </nav>
  )
}
