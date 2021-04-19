import React, { useState } from "react"
import { Link } from "gatsby"

export default function Navbar() {
  //Enlaces
  const enlaces = [
    {
      nombre: "Herramientas",
      link: "herramientas",
    },
    {
      nombre: "Proyectos",
      link: "proyectos",
    },
    {
      nombre: "Contacto",
      link: "contacto",
    },
  ]

  //state
  const [show, setShow] = useState(false)

  //Funcion para generar links
  const generarLinks = item => (
    <li className="text-center" key={item.link}>
      <Link
        to={`#${item.link}`}
        className="p-4 block"
        role="menuitem"
        activeClassName="p-4 block underline"
      >
        {item.nombre}
      </Link>
    </li>
  )

  return (
    <nav className="w-full fixed top-0 z-20 bg-black text-white flex flex-col justify-center md:flex-row md:justify-between">
      <div className="m-4 text-base tracking-widest md:text-2xl">
        <Link to="/">EduardX</Link>
      </div>
      <button
        className="absolute top-4 right-4 flex md:hidden"
        onClick={() => setShow(!show)}
      >
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="sr-only">Toggle button</span>
      </button>
      <div
        className={`${
          show ? "block" : "hidden"
        } w-full my-auto md:flex md:w-auto`}
      >
        <ul className="w-full flex flex-col md:mx-0 md:flex md:flex-row">
          {enlaces.map(generarLinks)}
        </ul>
      </div>
    </nav>
  )
}
