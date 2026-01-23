import ScrambleText from './ScrambleText';

export default function Hero() {
	return (
		<section className="min-h-[80vh] flex items-center justify-center text-center py-16 px-4 bg-[radial-gradient(circle_at_center,_#2a2a2d_0%,_theme(colors.bg)_70%)]">
			<div className="max-w-[800px] w-full">
				<h1 className="text-4xl text-pink-200 font-extrabold mb-4">
					<ScrambleText text="Scrambled Text" />
				</h1>
				<h1 className="text-6xl font-extrabold mb-8 tracking-tighter">
					<ScrambleText text="Design" /> <span className="bg-gradient-to-r from-[#d6edff] to-[#9f64ff] bg-clip-text text-transparent"><ScrambleText text="Morderne" /></span> & <br />
					Technologie <span className="bg-gradient-to-r from-primary to-[#9f64ff] bg-clip-text text-transparent">Avancée</span>
				</h1>
				<p className="text-xl text-text-muted mb-16 leading-relaxed">
					Une base technique solide pour construire des expériences web immersives avec React et Vite.
				</p>
				<div className="flex gap-4 justify-center">
					<button className="bg-primary text-white hover:bg-primary-hover border-none px-6 py-3 rounded-lg font-medium transition-colors">Commencer</button>
					<button className="bg-transparent border border-surface hover:border-text-muted px-6 py-3 rounded-lg font-medium transition-colors">En savoir plus</button>
				</div>
			</div>
		</section>
	);
}
