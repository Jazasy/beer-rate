import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ShowBeerCard from "../components/ShowBeerCard";
import ShowBeerFormPaper from "../components/ShowBeerFormPaper";
import ShowBeerReviewsPaper from "../components/ShowBeerReviewsPaper";
import LoadingText from "../components/LoadingText";

export default function Show() {
	const { id } = useParams();
	const [beer, setBeer] = useState(null);

	const fetchBeer = async () => {
		const result = await axios.get(`/beers/${id}`);
		setBeer(result.data);
	};

	useEffect(() => {
		fetchBeer();
	}, []);

	return (
		<Container>
			{!beer ? (
				<LoadingText text="Loading..."/>
			) : (
				<>
					<ShowBeerCard beer={beer} />
					<ShowBeerFormPaper id={id} fetchBeer={fetchBeer} />
					<ShowBeerReviewsPaper reviews={beer.reviews} />
				</>
			)}
		</Container>
	);
}
