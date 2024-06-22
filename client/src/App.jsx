import "./App.css";

import axios from "axios";

import { Routes, Route } from "react-router-dom";
import {
	CssBaseline,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "../src/pages/Home";
import Show from "../src/pages/Show";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
	return (
		<>
			<CssBaseline />

			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Add
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Show />} />
			</Routes>
		</>
	);
}

export default App;
