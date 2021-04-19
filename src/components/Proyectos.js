import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Proyectos() {
  return (
    <section id="proyectos" className="text-white py-12">
      <h3 className="text-5xl text-center pt-6">Proyectos</h3>
      {/* Datatics */}
      <h3 className="text-4xl py-12">DataTics</h3>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full pb-8 lg:w-1/2">
          <StaticImage
            src="../images/Proyectos/DataTics1.png"
            alt="DataTics HomePage"
            className="w-full"
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <p className="text-xl pb-4">
            Página web y sistema de control de pagos para la empresa DataTics
          </p>
          <ul className="list-disc pl-4">
            <li>Frontend: Tailwind y Blade</li>
            <li>Backend: Laravel</li>
            <li>Base de datos: MySQL</li>
          </ul>
          <a
            className="text-2xl text-blue-600 font-bold mt-8 block underline"
            href="https://datatics.com.mx/"
            target="_blank"
            rel="noreferrer noopener"
          >
            DataTics
          </a>
        </div>
      </div>

      {/* COVID por partido */}
      <h3 className="text-4xl py-12">COVID por partido</h3>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full pr-4 lg:w-1/2">
          <p className="text-xl pb-4">
            Página web informativa sobre el avance del COVID-19 en México divido
            en los partidos que gobiernan cada uno de los estados
          </p>
          <ul className="list-disc pl-4">
            <li>Frontend: Tailwind y GatsbyJS</li>
            <li>Backend: JavaScript (Consume una API)</li>
            <li>Base de datos: Firebase Realtime Database</li>
          </ul>
          <a
            className="text-2xl text-blue-600 font-bold mt-8 block underline"
            href="https://eduardoconx.github.io/COVIDPorPartido/"
            target="_blank"
            rel="noreferrer noopener"
          >
            COVID Por Partido
          </a>
        </div>
        <div className="w-full pb-8 lg:w-1/2">
          <StaticImage
            src="../images/Proyectos/COVIDPorPartido.png"
            alt="COVID Por Partido HomePage"
            className="w-full"
          />
        </div>
      </div>

      {/* SCCEG */}
      <h3 className="text-4xl py-12">SCCEG</h3>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full pb-8 lg:w-1/2">
          <StaticImage
            src="../images/Proyectos/SCCEG.png"
            alt="SCCEG HomePage"
            className="w-full"
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <p className="text-xl pb-4">
            Sistema para el Control de Cursos Especiales y Globales para el
            Instituto Tecnológico Superior de Huichapan
          </p>
          <ul className="list-disc pl-4">
            <li>Frontend: Tailwind y Blade</li>
            <li>Backend: Laravel</li>
            <li>Base de datos: MySQL</li>
          </ul>
        </div>
      </div>

      {/* Cortes de caja */}
      <h3 className="text-4xl py-12">
        Cortes de caja (Mejor nombre pendiente)
      </h3>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full px-4 lg:w-1/2">
          <p className="text-xl pb-4">
            Sistema para el Control de ventas, depósitos, cortes de caja y
            control de turnos en gasolineras
          </p>
          <ul className="list-disc pl-4">
            <li>Frontend: Tailwind y Blade</li>
            <li>Backend: Laravel</li>
            <li>Base de datos: MySQL</li>
          </ul>
        </div>
        <div className="w-full pb-8 lg:w-1/2">
          <StaticImage
            src="../images/Proyectos/CortesDeCaja.png"
            alt="Cortes de caja HomePage"
            className="w-full"
          />
        </div>
      </div>

      {/* ESCPOS */}
      <h3 className="text-4xl py-12">github.com/EduardoConX/escpos</h3>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full pb-8 lg:w-1/2">
          <StaticImage
            src="../images/Proyectos/ESCPOS.png"
            alt="ESCPOS Github Page"
            className="w-full"
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <p className="text-xl pb-4">
            Librería para trabajar de manera más sencilla con impresoras
            térmicas que usen el lenguaje ESC/POS
          </p>
          <ul className="list-disc pl-4">
            <li>Lenguaje de programación: Go</li>
          </ul>
          <a
            className="text-2xl text-blue-600 font-bold mt-8 block underline"
            href="https://github.com/EduardoConX/escpos"
            target="_blank"
            rel="noreferrer noopener"
          >
            github.com/EduardoConX/escpos
          </a>
        </div>
      </div>
    </section>
  )
}
