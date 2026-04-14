import useInView from "../../hooks/useInView";
import "./Footer.css";

function Footer() {
	const [footerRef, footerVisible] = useInView(0.1);

	return (
		<footer
			ref={footerRef}
			className={`footer animate-fade-up${footerVisible ? " in-view" : ""}`}
		>
			<div className="container">{new Date().getFullYear()} Meu Portfolio</div>
		</footer>
	);
}

export default Footer;
