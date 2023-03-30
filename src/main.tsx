import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./Provider/ThemeContextProvider";
import "./Styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
);
