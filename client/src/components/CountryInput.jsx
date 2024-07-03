import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const countries = ["Hungary", "Croatia", "Czeck", "Belgium"].sort();

export default function CountryInput({handleChange, beerData}) {
	return (
		<FormControl sx={{ width: { xs: 1, md: 0.5 } }}>
			<InputLabel id="demo-simple-select-label">Country of beer</InputLabel>
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
	);
}
