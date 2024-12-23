import "./App.css";

import axios from "axios";

import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Home from "../src/pages/Home";
import Show from "../src/pages/Show";
import Navbar from "./components/Navbar";
import Add from "../src/pages/Add";
import Landing from "./pages/Landing";

//axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "https://beer-rate.onrender.com";
axios.defaults.withCredentials = true;

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/beers" element={<Home />} />
				<Route path="/beers/countries/:country" element={<Home />} />
				<Route path="/addbeer" element={<Add />} />
				<Route path="/beers/:id" element={<Show />} />
			</Routes>
		</>
	);
}

export default App;
