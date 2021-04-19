import React from "react"

//Iconos
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

export default function Contacto() {
  return (
    <section id="contacto" className="text-white py-12">
      <h3 className="text-5xl text-center">Contacto</h3>
      <div className="flex py-12">
        <div className="w-1/3 flex justify-center">
          <a
            className="text-6xl"
            href="mailto:eduardopachecoquintanar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="w-1/3 flex justify-center">
          <a
            className="text-6xl"
            href="http://github.com/eduardoConX/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="w-1/3 flex justify-center">
          <a
            className="text-6xl"
            href="https://www.linkedin.com/in/eduardx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
