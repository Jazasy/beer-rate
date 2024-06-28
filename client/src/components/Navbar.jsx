import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate(); //initializing useNavigate
	return (
		<AppBar position="static">
			<Toolbar>
				{/* <IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton> */}
				<Button onClick={() => navigate("/")} color="inherit">
					Home
				</Button>
				<Button color="inherit" sx={{ marginLeft: "auto" }}>
					Couldnt find a beer?
				</Button>
			</Toolbar>
		</AppBar>
	);
}
