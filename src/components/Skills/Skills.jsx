import skills from "../../data/skills";
import useInView from "../../hooks/useInView";
import "./Skills.css";

function Skills() {
	const [titleRef, titleVisible] = useInView(0.15);
	const [listRef, listVisible] = useInView(0.1);

	return (
		<section className="section container" id="skills">
			<h2
				ref={titleRef}
				className={`animate-fade-up${titleVisible ? " in-view" : ""}`}
			>
				Skills
			</h2>
			<ul
				ref={listRef}
				className={`skills-list stagger-children${listVisible ? " in-view" : ""}`}
			>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</section>
	);
}

export default Skills;
