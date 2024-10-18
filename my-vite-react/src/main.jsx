import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

const domElement = React.createElement(
	'a',
	{href: 'https://google.com', target: '_blanck'},
	'Go to google'
)

createRoot(document.getElementById('root')).render(
	domElement
    // <App />
)
