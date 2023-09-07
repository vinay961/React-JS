import "./App.css"
function App() {

  return (
    <>
      <nav className="navigation">
        <div className="logo">Information</div>
        <div className="Sub-header">
          <li>Home</li>
          <li className="special">Services</li>
          <li>About Us</li>
        </div>
      </nav>
      <section className="section">
        <h2>Services</h2>
        <p>To download notes of Databases Click on below button</p>
        <a href="https://www.db-book.com/slides-dir/index.html"><button className="btn">Click Me!!</button></a>
      </section>
      <footer className="footer">
        <div className="foot">
          <h3>NFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Vinay</h3>
        </div>
      </footer>
    </>
  )
}

export default App
