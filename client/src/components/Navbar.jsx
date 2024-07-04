import { useNavigate } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
	"All",
	"Hungary",
	"Croatia",
	"Czech",
	"Belgium",
	"You can't find a beer?",
];

export default function Navbar() {
	const navigate = useNavigate(); //initializing useNavigate

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null);
		page === "All"
			? navigate("/beers")
			: page === pages[pages.length - 1]
			? navigate("/addbeer")
			: navigate(`/beers/countries/${page.toLowerCase()}`);
	};

	return (
		<>
			<AppBar position="sticky">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography
											textAlign="center"
											onClick={() => handleCloseNavMenu(page)}
										>
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "center",
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={() => handleCloseNavMenu(page)}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}
