import axios from "axios";
import { useState, useEffect } from "react";


import { homeContainerStyle, homeBeerCardStyle } from "../styles";

import { Container } from "@mui/material";
import HomeBeerCard from "../components/HomeBeerCard";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/beers").then((res) => setData(res.data));
	}, []);

	return (
		<>
			<Container sx={homeContainerStyle}>
				{data.map((beer, i) => (
					<HomeBeerCard beer={beer} key={beer._id}/>
				))}
			</Container>
		</>
	);
}
