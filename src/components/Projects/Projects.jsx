import projects from "../../data/projects";
import useInView from "../../hooks/useInView";
import "./Projects.css";

function Projects({ showAll = false }) {
	const visibleProjects = showAll ? projects : projects.slice(0, 3);
	const [titleRef, titleVisible] = useInView(0.15);
	const [listRef, listVisible] = useInView(0.1);

	return (
		<section className="section container projects-section" id="projects">
			<h2
				ref={titleRef}
				className={`animate-fade-up${titleVisible ? " in-view" : ""}`}
			>
				Projetos
			</h2>
			<div
				ref={listRef}
				className={`projects-list stagger-children${listVisible ? " in-view" : ""}`}
			>
				{visibleProjects.map((project) => (
					<article key={project.id} className="project-row">
						<div>
							<p className="project-meta">0{project.id}</p>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
						<div className="project-side">
							<p>{project.tech.join(" / ")}</p>
							{project.url && project.url !== "#" && (
								<a href={project.url} target="_blank" rel="noreferrer">
									Abrir
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;
