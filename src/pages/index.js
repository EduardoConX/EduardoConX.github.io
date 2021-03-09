import React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Mis componentes
import Layout from "../components/Layout"
import Header from "../components/Header"

//Componentes importados
import SEO from "../components/SEO"

//Constantes
export default function Index() {
  return (
    <Layout>
      <SEO title="Eduardo Pacheco | Programador" />
      <Header />
      <div className="h-screen">{/* Un enter muy sucio */}</div>
      <div className="text-white py-16 text-2xl" id="sobreMi">
        Ademas de aplicaciones web, también hago aplicaciones moviles y de
        escritorio, me gusta crear software con interfaces minimalistas a la vez
        que funcionales, el buen rendimiento es una parte importante de lo que
        hago.
      </div>
      <section id="herramientas" className="text-white py-12">
        <h2 className="text-4xl">Herramientas con las que trabajo</h2>
        <div className="flex flex-col">
          <h3 className="text-2xl py-12">Diseño</h3>
          <div className="flex w-full">
            <StaticImage
              src="../images/Figma.png"
              alt="Figma"
              className="w-36 h-36"
            />
          </div>
          <h3 className="text-2xl py-12">Desarrollo Web</h3>
          <div className="flex flex-wrap w-full">
            <StaticImage
              src="../images/HTML5.png"
              alt="HTML5"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/CSS3.png"
              alt="CSS3"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/JavaScript.png"
              alt="JavaScript"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/SASS.png"
              alt="SASS"
              className="w-36 h-auto"
            />
          </div>
          <h3 className="text-2xl py-12">Lenguajes de programación</h3>
          <div className="flex flex-wrap w-full">
            <StaticImage
              src="../images/PHP.png"
              alt="PHP"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/Python.png"
              alt="Python"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/Golang.png"
              alt="Golang"
              className="w-36 h-auto"
            />
          </div>
          <h3 className="text-2xl">Frameworks</h3>
          <div className="flex flex-wrap w-full">
            <StaticImage
              src="../images/Laravel.png"
              alt="JavaScript"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/React.png"
              alt="JavaScript"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/Gatsby.png"
              alt="JavaScript"
              className="w-36 h-36"
            />
          </div>
          <h3 className="text-2xl">Bases de datos</h3>
          <div className="flex flex-wrap w-full">
            <StaticImage
              src="../images/MySQL.png"
              alt="JavaScript"
              className="w-36 h-36 mr-10"
            />
            <StaticImage
              src="../images/Firebase.png"
              alt="JavaScript"
              className="w-36 h-36"
            />
          </div>
        </div>
      </section>
      <section id="proyectos" className="text-white py-12">
        <h3 className="text-4xl">Proyectos</h3>
        <h3 className="text-2xl py-12">DataTics</h3>
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
        <h3 className="text-2xl py-12">COVID por partido</h3>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full pr-4 lg:w-1/2">
            <p className="text-xl pb-4">
              Página web informativa sobre el avance del COVID-19 en México
              divido en los partidos que gobiernan cada uno de los estados
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
      </section>
      <section id="contacto" className="text-white py-12">
        <h2 className="text-4xl">
          ¿Interesado en que trabaje contigo? Contáctame
        </h2>
        <h3 className="text-2xl py-6">
          Envíame un correo a{" "}
          <a
            href="mailto:eduardopachecoquintanar@gmail.com"
            className="text-blue-600 underline font-bold"
          >
            eduardopachecoquintanar@gmail.com
          </a>{" "}
          y con gusto te atenderé.
        </h3>
      </section>
      <footer className="text-white py-8 text-center">
        <a
          href="https://github.com/EduardoConX"
          className="text-3xl font-bold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi perfil en Github
        </a>
      </footer>
    </Layout>
  )
}
