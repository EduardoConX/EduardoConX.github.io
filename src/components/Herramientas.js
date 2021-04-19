import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Herramientas() {
  return (
    <section id="herramientas" className="text-white py-12">
      <h3 className="text-5xl text-center pt-6">
        Herramientas con las que trabajo
      </h3>
      <div className="flex flex-col">
        <h3 className="text-4xl py-12">Diseño</h3>
        <div className="flex w-full">
          <StaticImage
            src="../images/Figma.png"
            alt="Figma"
            className="w-36 h-36"
          />
        </div>
        <h3 className="text-4xl py-12">Desarrollo Web</h3>
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
        <h3 className="text-4xl py-12">Lenguajes de programación</h3>
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
        <h3 className="text-4xl py-12">Frameworks</h3>
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
        <h3 className="text-4xl py-12">Bases de datos</h3>
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
  )
}
