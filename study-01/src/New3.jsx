import React from "react"

// this below example define how to work react, when we creat any component in jsx file
// and alo added evalution expression


const Add = " lokal host"

let ReactElement = React.createElement(
    'a',
    { href: 'https://chaicode.com/', target: "_blank" },
    'click to visit',
    Add
    // this varialbe add in componenet call evaluation expression
)

export default ReactElement;