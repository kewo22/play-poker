import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import App from "./App";

// Register service worker
registerSW({
	immediate: true,
	onRegistered(r: ServiceWorkerRegistration | undefined) {
		console.log("Service Worker registered", r);
	},
	onRegisterError(error) {
		console.log("Service Worker registration error", error);
	},
});

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
