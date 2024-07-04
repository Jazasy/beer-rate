import { Container, Paper, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import AddBeerNameAndCountry from "../components/AddBeerNameAndCountry";
import FileInput from "../components/FileInput";
import toast from "react-hot-toast";

export default function Add() {
	const [beerData, setBeerData] = useState({
		name: "",
		country: "",
		description: "",
	});
	const [imagePreview, setImagePreview] = useState(null);

	const handleChange = (event) => {
		setBeerData((oldBeerData) => {
			return {
				...oldBeerData,
				[event.target.name]: event.target.files
					? event.target.files[0]
					: event.target.value,
			};
		});
		event.target.files &&
			setImagePreview(URL.createObjectURL(event.target.files[0]));
	};

	const submitBeer = async () => {
		if (!beerData.name) return toast.error("You have to give a name!");
		if (!beerData.country) return toast.error("You have to pick a coutnry!");
		if (!beerData.description)
			return toast.error("You have to write a description!");
		if (!beerData.image) return toast.error("You have to choose an image!");

		const formData = new FormData();
		for (const key in beerData) {
			formData.append(key, beerData[key]);
		}

		try {
			await axios.post("/beers", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			setBeerData({ name: "", country: "", description: "", image: null });
			toast.success("Beer submitted!");
		} catch (error) {
			toast.error("An error occured during submition");
		}
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography variant="h2" sx={{ color: "white", mt: 2 }}>
				ADD BEER
			</Typography>
			<Paper
				sx={{
					mt: 2,
					p: 2,
					pb: 0,
					width: 1,
					backgroundColor: "rgba(255,255,255,0.6)",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<AddBeerNameAndCountry beerData={beerData} handleChange={handleChange}/>
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
				{beerData.image && (
					<Box
						component="img"
						src={imagePreview}
						sx={{ mt: 1, height: "150px", alignSelf: "center" }}
					></Box>
				)}
				<SubmitButton handleClick={submitBeer} />
			</Paper>
		</Container>
	);
}
