import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="w-11/12 mx-auto sm:w-4/5">{children}</div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
