import React from "react"

//Plugins
import Typewriter from "typewriter-effect"
export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-white mx-auto text-6xl text-center" id="terminal">
        <Typewriter
          options={{
            cursor: "_",
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
              .start()
          }}
        />
      </div>
    </div>
  )
}
