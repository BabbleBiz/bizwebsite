import React from 'react';
import {Button} from 'semantic-ui-react'
import './App.css';
import logo from './logo.png'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo"  className='logo'/>
        <p>
          Elizabeth 'Biz' Silverstein
        </p>
        <Button className="ui button">Click Here</Button>
        <a
          className="App-link"
          href="https://github.com/BabbleBiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: babblebiz
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/elizabethsilverstein/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: elizabethsilverstein
        </a>

      </header>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
