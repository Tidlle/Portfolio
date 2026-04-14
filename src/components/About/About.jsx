import useInView from "../../hooks/useInView";
import "./About.css";

function About() {
	const [headingRef, headingVisible] = useInView(0.15);
	const [bioRef, bioVisible] = useInView(0.1);
	const [rightRef, rightVisible] = useInView(0.1);

	return (
		<section className="section container about-section" id="about">
			<h2
				ref={headingRef}
				className={`animate-fade-left${headingVisible ? " in-view" : ""}`}
			>
				Sobre
			</h2>

			<div className="about-grid">
				<div
					ref={bioRef}
					className={`about-bio animate-fade-up${bioVisible ? " in-view" : ""}`}
				>
					<p className="about-description">
						Desenvolvedor Full-Stack com sólida base em front-end — <strong>HTML, JavaScript, 
						CSS, Tailwind e React </strong>— e crescente especialização em back-end com
						<strong> Java</strong> e <strong>Python</strong>, construindo APIs e
						automações que complementam a camada visual. Formado em Design Gráfico &
						Motion Design pela Escola SAGA, transitando com naturalidade entre
						desenvolvimento e direção criativa para entregar produtos digitais
						completos.
					</p>

					<div className="about-languages">
						<h3>Idiomas</h3>
						<ul>
							<li>
								<span>Inglês</span>
								<span className="about-level">Avançado</span>
							</li>
							<li>
								<span>Espanhol</span>
								<span className="about-level">Intermediário</span>
							</li>
						</ul>
					</div>
				</div>

				<div
					ref={rightRef}
					className={`about-right stagger-children${rightVisible ? " in-view" : ""}`}
				>
					<div className="about-block">
						<h3>Formação</h3>
						<ul className="about-timeline-list">
							<li>
								<span className="about-date">2022 — 2024</span>
								<strong>Ensino Médio Técnico</strong>
								<span className="about-institute">FIAP</span>
							</li>
							<li>
								<span className="about-date">2023 — 2025</span>
								<strong>Design Gráfico & Motion Design</strong>
								<span className="about-institute">Escola SAGA</span>
							</li>
							<li>
								<span className="about-date">2025 — Atual</span>
								<strong>Análise e Desenvolvimento de Sistemas</strong>
								<span className="about-institute">FIAP</span>
							</li>
							
						</ul>
					</div>

				</div>
			</div>
		</section>
	);
}

export default About;
