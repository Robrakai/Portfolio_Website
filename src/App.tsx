import Hero from './components/Hero'

function App() {
	return (
		<div className="min-h-screen">
			<header className="flex justify-between items-center px-16 py-4">
				<div className="font-bold text-2xl">MyDesign</div>
				<nav className="flex gap-8">
					<a href="#">Accueil</a>
					<a href="#">Projets</a>
					<a href="#">Contact</a>
				</nav>
			</header>
			<main>
				<Hero />
			</main>
		</div>
	)
}

export default App
