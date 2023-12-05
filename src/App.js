import "./App.scss";
import { Home } from "./components/Home";
import { useSelector } from "react-redux";

function App() {
	const theme = useSelector((state) => state.reducerTheme);
	// console.log(`theme now: `, theme);
	return (
		<div className="App bg-primary" data-bs-theme={theme}>
			<Home />
		</div>
	);
}

export default App;
