import { Box, Typography, Rating } from "@mui/material";

export default function BeerRating({ beer }) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Rating readOnly value={beer.rating} size="large" precision={0.5} />
			<Typography sx={{ color: "rgba(0,0,0,0.6)" }} variant="h5">
				{beer.rating.toFixed(1)}
			</Typography>
		</Box>
	);
}
