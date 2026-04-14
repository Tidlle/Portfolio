import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "projects", element: <ProjectsPage /> },
			{ path: "*", element: <NotFound /> }
		]
	}
]);

export default router;
