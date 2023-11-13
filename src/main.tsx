import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ShopProvider from "./context/shop.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ShopProvider>
		<App />
	</ShopProvider>
);
