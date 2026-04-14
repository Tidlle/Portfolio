import { useEffect, useRef } from "react";
import "./BackgroundCanvas.css";

function BackgroundCanvas() {
	const canvasRef = useRef(null);
	const mouse = useRef({ x: 0.5, y: 0.5 });

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return undefined;

		const ctx = canvas.getContext("2d");
		if (!ctx) return undefined;

		let rafId;
		let time = 0;
		let width = window.innerWidth;
		let height = window.innerHeight;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const onMouseMove = (event) => {
			mouse.current.x = event.clientX / width;
			mouse.current.y = event.clientY / height;
		};

		const draw = () => {
			time += 0.005;
			ctx.clearRect(0, 0, width, height);

			ctx.fillStyle = "#000";
			ctx.fillRect(0, 0, width, height);

			const glowX = width * mouse.current.x;
			const glowY = height * mouse.current.y;
			const radius = Math.max(width, height) * 0.35;
			const glow = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, radius);
			glow.addColorStop(0, "rgba(255,255,255,0.16)");
			glow.addColorStop(0.6, "rgba(255,255,255,0.04)");
			glow.addColorStop(1, "rgba(255,255,255,0)");
			ctx.fillStyle = glow;
			ctx.fillRect(0, 0, width, height);

			ctx.strokeStyle = "rgba(255,255,255,0.07)";
			ctx.lineWidth = 1;
			const step = 48;
			for (let x = 0; x <= width; x += step) {
				const offset = Math.sin(time * 3 + x * 0.008) * 5;
				ctx.beginPath();
				ctx.moveTo(x + offset, 0);
				ctx.lineTo(x - offset, height);
				ctx.stroke();
			}

			for (let y = 0; y <= height; y += step) {
				const offset = Math.cos(time * 2 + y * 0.01) * 4;
				ctx.beginPath();
				ctx.moveTo(0, y + offset);
				ctx.lineTo(width, y - offset);
				ctx.stroke();
			}

			rafId = requestAnimationFrame(draw);
		};

		resize();
		draw();
		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", onMouseMove, { passive: true });

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}

export default BackgroundCanvas;
