import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { homeContainerStyle, homeBeerCardStyle } from "../styles";

import {
	Button,
	Card,
	CardHeader,
	CardMedia,
	CardActions,
	Container,
	Rating
} from "@mui/material";

export default function Home() {
	const [data, setData] = useState([]);

	const navigate = useNavigate(); //initializing useNavigate

	useEffect(() => {
		axios.get("/beers").then((res) => setData(res.data));
	}, []);

	return (
		<>
			<Container sx={homeContainerStyle}>
				{data.map((beer, i) => (
					<Card sx={homeBeerCardStyle} key={i}>
						<CardHeader title={beer.name} />
						<Rating readOnly value={beer.rating} size="large" precision={0.5} />
						<CardMedia
							sx={{ p: 3, px: { xs: "30%", md: 3 } }}
							component="img"
							image={beer.image}
						/>
						<CardActions>
							<Button
								onClick={() => navigate(`${beer._id}`)}
								variant="contained"
							>
								View More
							</Button>
						</CardActions>
					</Card>
				))}
			</Container>
		</>
	);
}
