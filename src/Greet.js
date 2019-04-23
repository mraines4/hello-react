// Your custom components should start with a capital letter.

// #1 Import React
import React from 'react';
// IF we were doing Node, we would have written:
// const React = require('react');

function excitedName(aName) {
    return aName.toUpperCase();
}


// declare your component
function Greet(props) {
    // Every component must return a React Element.
    return (
        <h1>
            Hello, {props.whom ? excitedName(props.whom) : excitedName('You')}!
        </h1>
    );
}






// #2 export your component
export default Greet; // Make the component name match the file name.
// By `default`, if someone imports from Greet, they should
// recieve our Greet component.