import React from 'react';
import {Button} from 'semantic-ui-react'
import './App.css';
import Projects from './Projects'
import Bio from './Bio'

function App() {
  return (
    <div className="App">
      <header id="App-header" >
        <p id='name'>
          Elizabeth  'Biz'  Silverstein
        </p>
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
        {/* <span>
        <a href="/" download="BizSilversteinResume">
        <Button className="ui tiny button">Download Biz's Resume</Button>
        </a>
        </span> */}
      </header>
      <div id='maincontainer'>
        <Bio />
        <Projects />
      </div>
    </div>
  );
}

export default App;
