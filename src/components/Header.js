import PropTypes from "prop-types"
import React from "react"

//Plugins
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <StaticImage
        src="../images/Code.png"
        alt="Header"
        className="header bg-center bg-no-repeat bg-cover "
      />
      <div className="header background-header z-10 flex flex-col">
        <div
          className="text-white m-auto bg-black w-full text-center"
          id="terminal"
        >
          <Typewriter
            options={{
              wrapperClassName: "py-8 text-6xl",
              cursorClassName: "text-6xl",
            }}
            onInit={typewriter => {
              typewriter
                .typeString("Hola mundo")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Soy Eduardo Pacheco")
                .pauseFor(1500)
                .typeString("<br>")
                .typeString("Soy programador Web")
                .pauseFor(1500)
                .deleteAll()
                .typeString(
                  "<a href='#sobreMi'>Da click aqui para continuar</a>"
                )
                .start()
            }}
          />
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
