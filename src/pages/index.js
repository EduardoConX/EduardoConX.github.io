import React from "react"

//Mis componentes
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Herramientas from "../components/Herramientas"
import Proyectos from "../components/Proyectos"
import Contacto from "../components/Contacto"

//Componentes importados
import SEO from "../components/SEO"

//Constantes
export default function Index() {
  return (
    <Layout>
      <SEO title="Eduardo Pacheco | Programador Web" />
      <Hero />
      <Herramientas />
      <Proyectos />
      <Contacto />
    </Layout>
  )
}
