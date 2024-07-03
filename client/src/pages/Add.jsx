import {
	Container,
	Paper,
	TextField,
	Typography,
	Box,
} from "@mui/material";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import CountryInput from "../components/CountryInput";
import FileInput from "../components/FileInput";

export default function Add() {
	const [beerData, setBeerData] = useState({
		name: "",
		country: "",
		description: "",
	});

	const handleChange = (event) => {
		setBeerData((oldBeerData) => {
			return { ...oldBeerData, [event.target.name]: event.target.value };
		});
	};

	const submitBeer = async () => {
		await axios.post("/beers", beerData);
	};

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Paper
				sx={{
					mt: 10,
					p: 2,
					pb: 0,
					width: 1,
					backgroundColor: "rgba(255,255,255,0.6)",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box
					sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
				>
					<TextField
						label="Name of beer"
						sx={{
							backgroundColor: "rgba(255,255,255,0.6)",
							mb: 1,
							mr: 1,
							width: { xs: 1, md: 0.5 },
						}}
						value={beerData.name}
						name="name"
						onChange={handleChange}
					/>
					<CountryInput handleChange={handleChange} beerData={beerData} />
				</Box>
				<TextField
					label="Description of beer"
					sx={{ mb: 1, backgroundColor: "rgba(255,255,255,0.6)" }}
					multiline
					rows={4}
					value={beerData.description}
					name="description"
					onChange={handleChange}
				/>
				<FileInput handleChange={handleChange} beerData={beerData} />
				{beerData.image && <img src={beerData.image} />}
				<SubmitButton handleClick={submitBeer} />
			</Paper>
		</Container>
	);
}
