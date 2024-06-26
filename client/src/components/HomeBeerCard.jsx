import {
	Card,
	CardHeader,
	Rating,
	CardMedia,
	CardActions,
	Button,
	Typography,
	Box,
} from "@mui/material";

import { homeBeerCardStyle } from "../styles";

import { useNavigate } from "react-router-dom";

export default function HomeBeerCard({ beer }) {
	const navigate = useNavigate(); //initializing useNavigate
	return (
		<Card sx={homeBeerCardStyle}>
			<CardHeader title={beer.name} />
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Rating readOnly value={beer.rating} size="large" precision={0.5} />
				<Typography sx={{ color: "rgba(0,0,0,0.6)" }} variant="h5">
					{beer.rating.toFixed(1)}
				</Typography>
			</Box>

			<CardMedia
				sx={{ p: 3, px: { xs: "30%", md: 3 } }}
				component="img"
				image={beer.image}
			/>
			<CardActions>
				<Button onClick={() => navigate(`${beer._id}`)} variant="contained">
					View More
				</Button>
			</CardActions>
		</Card>
	);
}