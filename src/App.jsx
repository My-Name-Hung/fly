import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Search from './Components/Search/Search'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Support from './Components/Support/Support'
import Travelers from './Components/Travelers/Travelers'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Footer />
    </div>
  )
}

export default App