import {
	Container,
	Paper,
	TextField,
	Typography,
	Box,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

export default function Add() {
	const [beerData, setBeerData] = useState({
		name: "",
		country: "",
		description: "",
	});

	const countries = ["Hungary", "Croatia", "Czeck", "Belgium"].sort();

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
					<FormControl sx={{ width: { xs: 1, md: 0.5 } }}>
						<InputLabel id="demo-simple-select-label">
							Country of beer
						</InputLabel>
						<Select
							sx={{ mb: 1, backgroundColor: "rgba(255,255,255,0.6)" }}
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Country"
							value={beerData.country}
							name="country"
							onChange={handleChange}
						>
							{countries.map((c, i) => (
								<MenuItem key={i} value={c}>
									{c}
								</MenuItem>
							))}
						</Select>
					</FormControl>
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
				<Button
					sx={{
						backgroundColor: "rgba(255,255,255,0.6)",
						color: "rgba(0,0,0,0.5)",
						borderColor: "rgba(0,0,0,0.2)",
						"&:hover": {
							borderColor: "black",
							backgroundColor: "rgba(255,255,255,0.6)",
						},
					}}
					component="label"
					role={undefined}
					variant="outlined"
					tabIndex={-1}
					startIcon={<CloudUploadIcon />}
					
				>
					Upload file
					<VisuallyHiddenInput type="file" />
				</Button>
				<SubmitButton handleClick={submitBeer} />
			</Paper>
		</Container>
	);
}
