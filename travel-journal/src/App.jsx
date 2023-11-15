import React, { useState } from 'react';
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Spacer from "./components/Spacer"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const cards = data.map((item, index) => (
    <React.Fragment key={item.id}>
      {index > 0 && <Spacer />}
      <Card {...item} />
    </React.Fragment>
  ));

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  
  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      <Footer toggleDarkMode = {toggleDarkMode}/>
    </div>
  )
}

export default App

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className={isDarkMode ? 'dark-mode' : ''}>
//       <Navbar toggleDarkMode={toggleDarkMode} />
//       <MyComponent />
//       {/* Add other components here */}
//     </div>
//   );
// };