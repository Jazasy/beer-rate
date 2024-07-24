import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
	const navigate = useNavigate();
	return (
		<Container
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center"
			}}
		>
			<Typography variant="h1" sx={{fontSize: 75}}>Wellcome to BeerRate!</Typography>
			<Typography variant="h4">Find the best beers anywhere</Typography>
			<Button
				variant="contained"
				size="large"
				sx={{ fontSize: "20px", mt: 5 }}
				onClick={() => navigate("/beers")}
			>
				Discover
			</Button>
		</Container>
	);
}
