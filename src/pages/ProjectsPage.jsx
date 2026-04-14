import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

function ProjectsPage() {
	return (
		<>
			<Header />
			<main className="page-main">
				<Projects showAll />
			</main>
			<Footer />
		</>
	);
}

export default ProjectsPage;
