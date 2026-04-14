import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="container header-content">
				<Link to="/" className="brand">
					Eduardo Martins
				</Link>
				<nav className="header-nav" aria-label="Navegacao principal">
					<Link to="/">Home</Link>
					<Link to="/projects">Projetos</Link>
					<a href="#about">Info</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
