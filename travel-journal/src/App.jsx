import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Spacer from "./components/Spacer"
import Footer from "./components/Footer"

function App() {
  const cards = data.map((item, index) => (
    <React.Fragment key={item.id}>
      {index > 0 && <Spacer />}
      <Card {...item} />
    </React.Fragment>
  ));
  
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}

export default App
