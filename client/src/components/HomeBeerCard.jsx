import { Card, CardMedia, CardActions, Button } from "@mui/material";

import { homeBeerCardStyle } from "../styles";
import "./beerCard.css";

import { useNavigate } from "react-router-dom";
import BeerRating from "./BeerRating";

export default function HomeBeerCard({ beer }) {
	const navigate = useNavigate(); //initializing useNavigate
	return (
		<Card sx={homeBeerCardStyle}>
			{/* <CardHeader title={beer.name}/> */}
			<h2 className="beerCardTitle">{beer.name}</h2>
			<BeerRating beer={beer} />
			<CardMedia
				sx={{ p: 3, px: { xs: "30%", md: 3 } }}
				component="img"
				image={beer.image}
			/>
			<CardActions>
				<Button onClick={() => navigate(`/${beer._id}`)} variant="contained">
					View More
				</Button>
			</CardActions>
		</Card>
	);
}
