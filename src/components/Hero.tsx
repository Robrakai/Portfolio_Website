import { useState } from 'react';
import ScrambleText from './ScrambleText';

interface HeroProps {
	variant?: 'default' | 'alt';
}

export default function Hero({ variant = 'default' }: HeroProps) {
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText('hugo.leroux1000@gmail.com');
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

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
		<section className="flex-1 flex flex-col items-center justify-start py-12 px-4 md:px-8 bg-bg overflow-y-auto w-full pb-32">
			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

				{/* Bento 1: Profil / Header (Col Span 2) */}
				<div className="col-span-1 md:col-span-2 bg-surface rounded-[var(--radius-xl)] p-8 shadow-lg border border-white/5 flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-colors">
					{/* Decorative subtle gradient */}
					<div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>

					<h1 className="text-4xl text-primary font-bold mb-2">
						<ScrambleText text="Hugo Le Roux" />
					</h1>
					<h2 className="text-2xl text-text font-semibold mb-4">
						[Etudiant en <span className="text-primary">developpement informatique</span>]
					</h2>
					<p className="text-text-muted leading-relaxed max-w-2xl text-lg font-light">
						[Votre courte biographie. Présentez-vous de manière professionnelle, décrivez votre passion, votre approche technique et ce que vous apportez à une équipe ou un projet.]
					</p>
				</div>

				{/* Bento 2: Contact / Liens (Col Span 1) */}
				<div className="col-span-1 bg-surface rounded-[var(--radius-xl)] p-8 shadow-lg border border-white/5 flex flex-col justify-center hover:border-primary/30 transition-colors">
					<h3 className="text-xl font-bold mb-4 text-text flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
						Contact & Liens
					</h3>
					<div className="flex flex-col gap-4">
						<button onClick={handleCopyEmail} className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-primary/50 hover:scale-105 hover:transition text-left w-full">
							<span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">@</span>
							<span className={`truncate transition-all duration-300 ${copied ? 'text-primary font-medium' : ''}`}>
								{copied ? 'Mail copié dans le presse-papier' : '[hugo.leroux1000@gmail.com]'}
							</span>
						</button>
						<a href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-primary/50 hover:scale-105 hover:transition">
							<span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">in</span>
							<span className="truncate">[URL LinkedIn]</span>
						</a>
						<a href="https://github.com/Robrakai" className="text-text-muted hover:text-primary font-bold  transition-colors flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-primary/50  hover:transition">
							<span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold"></span>
							<span className="truncate justify-center">[GitHub]</span>
						</a>
						<a href="/CV_Hugo_Le_Roux.pdf" download className="mt-2 text-center block bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] font-bold py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] uppercase tracking-wider text-sm">
							Télécharger CV
						</a>
					</div>
				</div>

				{/* Bento 3: Expérience (Col Span 1) */}
				<div className="col-span-1 bg-surface rounded-[var(--radius-xl)] p-8 shadow-lg border border-white/5 hover:border-primary/30 transition-colors flex flex-col">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4">Expérience</h3>
					<div className="flex flex-col gap-6 flex-1">
						<div className="relative pl-6 border-l-2 border-primary/30">
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary"></span>
							<div className="flex flex-col mb-1">
								<h4 className="font-bold text-text text-lg hover:text-primary transition-colors cursor-default">[Titre du Poste]</h4>
								<span className="text-sm font-medium text-primary mb-1">[Période, ex: 2022 - Présent]</span>
							</div>
							<p className="text-sm text-text-muted font-medium">[Nom de l'entreprise]</p>
							<p className="text-sm text-text-muted mt-2 line-clamp-3">[Brève description des responsabilités et réalisations clés.]</p>
						</div>
						<div className="relative pl-6 border-l-2 border-white/10">
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-white/20"></span>
							<div className="flex flex-col mb-1">
								<h4 className="font-bold text-text text-lg hover:text-primary transition-colors cursor-default">[Poste Précédent]</h4>
								<span className="text-sm font-medium text-text-muted mb-1">[Période, ex: 2020 - 2022]</span>
							</div>
							<p className="text-sm text-text-muted font-medium">[Nom de l'entreprise]</p>
						</div>
					</div>
				</div>

				{/* Bento 4: Compétences (Col Span 2) */}
				<div className="col-span-1 md:col-span-2 bg-surface rounded-[var(--radius-xl)] p-8 shadow-lg border border-white/5 hover:border-primary/30 transition-colors">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4">Compétences & Expertise</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Group 1 */}
						<div className="bg-bg/50 p-5 rounded-2xl border border-white/5">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Catégorie 1, ex: Frontend]
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
							</div>
						</div>
						{/* Group 2 */}
						<div className="bg-bg/50 p-5 rounded-2xl border border-white/5">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Catégorie 2, ex: Backend]
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
							</div>
						</div>
						{/* Group 3 */}
						<div className="bg-bg/50 p-5 rounded-2xl border border-white/5">
							<h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
								[Catégorie 3, ex: Outils]
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
								<span className="px-3 py-1.5 bg-surface rounded-lg text-sm text-text-muted border border-white/5 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-colors cursor-default shadow-sm">[Compétence]</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bento 5: Projets Réalisés (Col Span 3) */}
				<div className="col-span-1 md:col-span-3 bg-surface rounded-[var(--radius-xl)] p-8 shadow-lg border border-white/5 hover:border-primary/30 transition-colors">
					<h3 className="text-xl font-bold mb-6 text-text border-b border-white/10 pb-4 flex justify-between items-center">
						<span>Projets Récents</span>
						<button className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1 transition-colors bg-primary/10 px-3 py-1.5 rounded-lg border border-transparent hover:border-primary/50 hover:bg-primary/20">
							Voir le portfolio détaillé <span className="text-lg leading-none">→</span>
						</button>
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

						{/* Projet 1 */}
						<a href="#" className="group rounded-2xl overflow-hidden bg-bg border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all flex flex-col h-full">
							<div className="h-48 bg-gradient-to-br from-surface to-[var(--color-surface-hover)] relative overflow-hidden border-b border-white/5">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="absolute inset-0 flex items-center justify-center text-text-muted/40 font-mono text-sm group-hover:scale-110 transition-transform duration-700">
									[Espace Image Projet 1]
								</div>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Nom du Projet]</h4>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Courte description du projet. Quel problème résout-il et quelles technologies clés ont été utilisées ?]</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
								</div>
							</div>
						</a>

						{/* Projet 2 */}
						<a href="#" className="group rounded-2xl overflow-hidden bg-bg border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all flex flex-col h-full">
							<div className="h-48 bg-gradient-to-br from-surface to-[var(--color-surface-hover)] relative overflow-hidden border-b border-white/5">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="absolute inset-0 flex items-center justify-center text-text-muted/40 font-mono text-sm group-hover:scale-110 transition-transform duration-700">
									[Espace Image Projet 2]
								</div>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Nom du Projet]</h4>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Courte description du projet. Quel problème résout-il et quelles technologies clés ont été utilisées ?]</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
								</div>
							</div>
						</a>

						{/* Projet 3 */}
						<a href="#" className="group rounded-2xl overflow-hidden bg-bg border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-all flex flex-col h-full">
							<div className="h-48 bg-gradient-to-br from-surface to-[var(--color-surface-hover)] relative overflow-hidden border-b border-white/5">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="absolute inset-0 flex items-center justify-center text-text-muted/40 font-mono text-sm group-hover:scale-110 transition-transform duration-700">
									[Espace Image Projet 3]
								</div>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h4 className="font-bold text-lg text-text mb-2 group-hover:text-primary transition-colors">[Nom du Projet]</h4>
								<p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">[Courte description du projet. Quel problème résout-il et quelles technologies clés ont été utilisées ?]</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
									<span className="text-[10px] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">[Tech]</span>
								</div>
							</div>
						</a>

					</div>
				</div>

			</div>
		</section>
	);
}
