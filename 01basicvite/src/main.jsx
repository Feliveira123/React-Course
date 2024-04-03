import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    children: 'Click me to visit Google!'
}

function MyApp(){
    return (
        <div>
            <h1>Custom React app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const AReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'Click to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
