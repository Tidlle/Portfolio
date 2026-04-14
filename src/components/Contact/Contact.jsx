import useInView from "../../hooks/useInView";
import "./Contact.css";

function Contact() {
	const [sectionRef, sectionVisible] = useInView(0.15);

	return (
		<section
			ref={sectionRef}
			className={`section container contact-section animate-fade-right${sectionVisible ? " in-view" : ""}`}
			id="contact"
		>
			<h2>Contato</h2>
			<p>eduardomartinscarmo1@gmail.com / +55 11 94035-5451</p>
		</section>
	);
}

export default Contact;
