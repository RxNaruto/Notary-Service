import React from 'react'
// import Footer from './components/Footer'
// import CheckDocuments from './components/CheckDocuments'
import {Inbox} from './components/Inbox'

const App = () => {
  return <>
  <div>
{/* <CheckDocuments/>
 <Footer/> */}
 <Inbox label={"Home"}/>
 <Inbox label={"Inbox"}/>
 <Inbox label={"Login"}/>
  </div>
  </>
}

export default App