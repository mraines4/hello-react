
// Just like require() in your Node.js code
// "ES6 style imports" (as opposed to calling require() in Node.js)
import React from 'react';      // Pull in the React library itself
                                // Put this in every .js file in your project

import logo from './logo.svg';  // Import an image. (React will do optimizations.)
import './App.css';             // Recommendation: no individual style files. Just use index.css

import Greet from './Greet';


// "App" is a component.
// A component is a function that returns a React Element.
// A React Element is a descripton of a DOM element (or tree).
// The most common way to specify a React Element is by using JSX.
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Greet />
        <Greet whom="Matt" />
        <Greet whom="Judah" />
        <Greet whom="Chelsey" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// Equivalent to module.exports
export default App;
