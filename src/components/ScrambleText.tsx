import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
	text: string;
	className?: string;
	speed?: number;
}

const CHARS = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

export default function ScrambleText({ text, className = "", speed = 10 }: ScrambleTextProps) {
	const [displayText, setDisplayText] = useState(text);
	const intervalRef = useRef<number | null>(null);

	const startScramble = () => {
		let iteration = 0;

		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = window.setInterval(() => {
			setDisplayText(
				text
					.split("")
					.map((letter, index) => {
						if (index < iteration) {
							return text[index];
						}
						return CHARS[Math.floor(Math.random() * CHARS.length)];
					})
					.join("")
			);

			if (iteration >= text.length) {
				if (intervalRef.current) clearInterval(intervalRef.current);
			}

			iteration += 1 / 3;
		}, speed);
	};

	useEffect(() => {
		startScramble();

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [text]);

	return (
		<span
			className={className}
			onMouseEnter={startScramble}
			style={{ display: 'inline-block', minWidth: '0.5ch' }} // Prevent layout shift logic if needed, simplify for now
		>
			{displayText}
		</span>
	);
}
