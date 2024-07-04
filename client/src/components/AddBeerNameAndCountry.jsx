import { Box, TextField } from "@mui/material";
import CountryInput from "./CountryInput";

export default function AddBeerNameAndCountry({beerData, handleChange}) {
	return (
		<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
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
	);
}
