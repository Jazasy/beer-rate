import axios from "axios";
import { useState, useEffect } from "react";

import { homeContainerStyle } from "../styles";

import { Container } from "@mui/material";
import HomeBeerCard from "../components/HomeBeerCard";
import LoadingText from "../components/LoadingText";

export default function Home() {
	const [data, setData] = useState([]);

	const sortBeers = (beers) => {
		return beers.sort((a, b) => b.rating - a.rating)
	}

	useEffect(() => {
		axios.get("/beers").then((res) => setData(res.data));
	}, []);

	return (
		<>
			<Container sx={homeContainerStyle}>
				{data.length === 0 ? (
					<LoadingText />
				) : (
					sortBeers(data).map((beer, i) => <HomeBeerCard beer={beer} key={beer._id} />)
				)}
			</Container>
		</>
	);
}
