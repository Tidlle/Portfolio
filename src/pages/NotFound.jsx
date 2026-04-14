import { Link } from "react-router-dom";

function NotFound() {
	return (
		<section className="section container not-found">
			<h1>404</h1>
			<p>Pagina nao encontrada.</p>
			<Link to="/">Voltar para home</Link>
		</section>
	);
}

export default NotFound;
