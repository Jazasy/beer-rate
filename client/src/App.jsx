import "./App.css";

import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Home from "../src/pages/Home";
import Show from "../src/pages/Show";
import Navbar from "./components/Navbar";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Show />} />
			</Routes>
		</>
	);
}

export default App;
