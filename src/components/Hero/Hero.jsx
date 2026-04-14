import { useState } from "react";
import useInView from "../../hooks/useInView";
import "./Hero.css";

function Hero() {
	const [titleRef, titleVisible] = useInView(0.2);
	const [subRef, subVisible] = useInView(0.2);
	const [mouseInfluence, setMouseInfluence] = useState(0);

	const handleMouseMove = (event) => {
		const { left, width } = event.currentTarget.getBoundingClientRect();
		const normalized = (event.clientX - left) / width;
		setMouseInfluence((normalized - 0.5) * 2);
	};

	return (
		<section className="section hero" onMouseMove={handleMouseMove} onMouseLeave={() => setMouseInfluence(0)}>
			<div className="container">
				<h1
					ref={titleRef}
					className={`animate-fade-up${titleVisible ? " in-view" : ""}`}
					style={{
						transform: `translate3d(${mouseInfluence * 18}px, 0, 0)`,
						letterSpacing: `${0.09 + Math.abs(mouseInfluence) * 0.05}em`
					}}
				>
					Desenvolvedor Full-Stack
				</h1>
				<p
					ref={subRef}
					className={`animate-fade-up${subVisible ? " in-view" : ""}`}
					style={{ animationDelay: "0.2s" }}
				>
					Código, arquitetura e interface alinhados ao objetivo do negócio.
				</p>
			</div>
		</section>
	);
}

export default Hero;
