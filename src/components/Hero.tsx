import ScrambleText from './ScrambleText';

interface HeroProps {
	variant?: 'default' | 'alt';
}

export default function Hero({ variant = 'default' }: HeroProps) {
	if (variant === 'alt') {
		return (
			<section className="flex-1 flex items-center justify-center text-center py-16 px-4 bg-[radial-gradient(ellipse_at_bottom,var(--color-surface)_0%,transparent_80%)]">
				<div className="max-w-[800px] w-full">
					<h1 className="text-3xl text-[#e6c344] font-mono mb-4 tracking-widest uppercase">
						<ScrambleText text="[ Designer Créatif ]" />
					</h1>
					<h1 className="text-7xl font-black mb-8 italic">
						Expériences <span className="bg-linear-to-r from-[#ffe32a] to-[#0d282a] bg-clip-text text-transparent">Immersives</span> & <br />
						Identité <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>Visuelle</span>
					</h1>
					<p className="text-2xl text-text-muted mb-16 font-light">
						Je sculpte le web pour créer des interfaces mémorables qui racontent une histoire unique.
					</p>
					<div className="flex gap-6 justify-center">
						<button className="bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,42,109,0.4)]">Lancer un projet</button>
						<button className="bg-transparent text-text border-2 border-surface hover:border-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all">Portfolio</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="flex-1 flex items-center justify-center text-center py-16 px-4 bg-[radial-gradient(circle_at_center,#2a2a2d_0%,theme(colors.bg)_70%)]">
			<div className="max-w-[800px] w-full">
				<h1 className="text-4xl text-pink-200 font-extrabold mb-4">
					<ScrambleText text="Développeur Logiciel" />
				</h1>
				<h1 className="text-6xl font-extrabold mb-8 tracking-tighter">
					<ScrambleText text="Ingénierie" /> <span className="bg-gradient-to-r from-[#d6edff] to-[#9f64ff] bg-clip-text text-transparent"><ScrambleText text="Robuste" /></span> & <br />
					Architecture <span className="bg-gradient-to-r from-primary to-[#9f64ff] bg-clip-text text-transparent">Scalable</span>
				</h1>
				<p className="text-xl text-text-muted mb-16 leading-relaxed">
					Une base technique solide pour construire des applications web performantes avec React et Node.
				</p>
				<div className="flex gap-4 justify-center">
					<button className="bg-primary text-white hover:bg-primary-hover border-none px-6 py-3 rounded-md font-medium transition-colors">Commencer</button>
					<button className="bg-transparent border border-surface hover:border-text-muted px-6 py-3 rounded-md font-medium transition-colors">En savoir plus</button>
				</div>
			</div>
		</section>
	);
}
