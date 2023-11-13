/**
*@fileoverview Entry application point. It contains the main components
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

import { Navbar } from "./components/Navbar"
import { ProductModal } from "./components/ProductModal"
import { Products } from "./pages/Products"

function App() {  

  return (
    <main>
      <Navbar />
      <ProductModal />     
      <Products />
    </main>
  )
}

export default App
