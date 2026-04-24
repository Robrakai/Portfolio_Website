import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';

const SiteContent = ({ variant = 'default' }: { variant?: 'default' | 'alt' }) => (
	<div className="min-h-screen flex flex-col">
		<header className="flex justify-between items-center px-16 py-4">
			<div className="font-bold text-2xl">
				{variant === 'default' ? 'MyDesign' : 'MyCreative'}
			</div>
			<nav className="flex gap-8">
				<a href="#" className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-400">Accueil</a>
				<a href="#" className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-400">Projets</a>
				<a href="#" className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-400">Contact</a>
			</nav>
		</header>
		<main className="flex-1 flex flex-col">
			<Hero variant={variant} />
		</main>
	</div>
);

function App() {
	// sliderPos va de 0 (tout à gauche) à 100 (tout à droite)
	const [sliderPos, setSliderPos] = useState(100);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Gestion du drag
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging || !containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			let x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
			let percentage = (x / rect.width) * 100;
			setSliderPos(percentage);
		};

		const handleMouseUp = () => {
			setIsDragging(false);
		};

		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging]);

	// Pour éviter de sélectionner du texte pendant le drag
	useEffect(() => {
		if (isDragging) {
			document.body.style.userSelect = 'none';
		} else {
			document.body.style.userSelect = '';
		}
	}, [isDragging]);

	return (
		<div
			ref={containerRef}
			className="relative w-screen h-screen overflow-hidden bg-black"
		>
			{/* COUCHE DU DESSOUS : THÈME 1 (GAUCHE) */}
			<div className="absolute inset-0 w-screen h-screen overflow-y-auto overflow-x-hidden text-(--color-text) font-(--font-family)">
				<SiteContent variant="default" />
			</div>

			{/* COUCHE DU DESSUS : THÈME 2 (DROITE) */}
			{/* clip-path coupe l'image. polygon(x1 y1, x2 y2...) */}
			<div
				className="absolute inset-0 w-screen h-screen overflow-y-auto overflow-x-hidden bg-(--color-bg) text-(--color-text) font-(--font-family) pointer-events-none"
				style={{
					'--color-primary': '#ff2a6d',
					'--color-primary-hover': '#ff6595',
					'--color-bg': '#2c7872',
					'--color-surface': '#27104e',
					'--color-text': '#05d9e8',
					'--color-text-muted': '#d1b2ff',
					clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
					transition: isDragging ? 'none' : 'clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
				} as React.CSSProperties}
			>
				{/* On remet pointer-events-auto pour que le site soit cliquable à droite */}
				<div className="pointer-events-auto h-full">
					<SiteContent variant="alt" />
				</div>
			</div>

			{/* LE SLIDER (LIGNE ET BOUTON) */}
			<div
				className="absolute top-0 bottom-0 z-50 flex items-center justify-center cursor-ew-resize group"
				style={{
					left: `${sliderPos}%`,
					width: '8px',
					transform: 'translateX(-50%)',
					transition: isDragging ? 'none' : 'left 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
				}}
				onMouseDown={() => setIsDragging(true)}
			>
				{/* La ligne verticale */}
				<div className="w-[2px] h-full bg-primary relative shadow-[0_0_10px_rgba(255,42,109,0.5)] group-hover:bg-white transition-colors">

					{/* Le Bouton central */}
					<button
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-white hover:text-primary transition-all flex items-center justify-center w-16 h-16"
						onClick={(e) => {
							// Si on ne fait que cliquer sans draguer
							if (!isDragging) {
								if (sliderPos === 100) setSliderPos(0);
								else if (sliderPos === 0) setSliderPos(100);
								else setSliderPos(100);
							}
						}}
					>
						<span className="font-bold text-xl tracking-tighter">
							&lt;&gt;
						</span>
					</button>

					{/* Texte indicatif quand le bouton est caché à droite */}
					{sliderPos === 100 && (
						<div className="absolute top-1/2 right-full -translate-y-1/2 mr-4 bg-surface text-text px-4 py-2 rounded-lg pointer-events-none opacity-100 transition-opacity whitespace-nowrap border border-primary/20 shadow-lg">
							Cliquer ou Glisser
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
