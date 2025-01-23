import React from 'react'
import Header from './header'
import Footer from './footer'

function Layouts({children}) {

  return (
   <>
   <Header/>
   <div>{children}</div>
   <Footer/>
   </>
  )
}

export default Layouts