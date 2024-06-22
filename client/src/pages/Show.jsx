import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ShowBeerCard from "../components/ShowBeerCard";
import ShowBeerFormPaper from "../components/ShowBeerFormPaper";

export default function Show() {
	const { id } = useParams();
	const [beer, setBeer] = useState(null);

	const fetchBeer = async () => {
		const result = await axios.get(`/beers/${id}`);
		setBeer(result.data);
	}

	useEffect(() => {
		fetchBeer();
	}, []);

	return (
		<Container>
			{!beer ? (
				<Typography align="center" sx={{ my: 20 }}>
					Loading...
				</Typography>
			) : (
				<>
					<ShowBeerCard beer={beer} />
					<ShowBeerFormPaper id={id} fetchBeer={fetchBeer}/>
				</>
			)}
		</Container>
	);
}
