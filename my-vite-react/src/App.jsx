import About from "./AboutVite"


function App() {
	const username = "This is vite react user!"
	return (
		<>
		<About />
		<h1>hello Vite-React?</h1>
		<p>Username: <b>{username}</b></p>
		</>
	)
}

export default App
