import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Winows/Home';
import TileBar from './Components/TileBar';

function App() {
  return (
    <div className="mainApp">
      <TileBar />

      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">

          <div className="App">
            <Home />
          </div >
        </div>
      </div>
    </div>
  );
}

export default App;
