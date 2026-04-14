import { Outlet } from "react-router-dom";
import BackgroundCanvas from "./components/BackgroundCanvas/BackgroundCanvas";

function App() {
	return (
		<>
			<BackgroundCanvas />
			<Outlet />
		</>
	);
}

export default App;
