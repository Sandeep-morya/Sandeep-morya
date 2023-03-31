import { createRoot } from "react-dom/client";
import App from "./App";
import NavbarStateProvider from "./Provider/NavbarStateProvider";
import ThemeProvider from "./Provider/ThemeContextProvider";
import "./Styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<NavbarStateProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</NavbarStateProvider>,
);
