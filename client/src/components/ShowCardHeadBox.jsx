import { Box, Typography, Rating } from "@mui/material";
import { showCardHeadBoxStyle } from "../styles";

export default function ShowCardHeadBox({ beer }) {
	return (
		<Box sx={showCardHeadBoxStyle}>
			<Typography variant="h3" align="center">
				{beer.name}
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Rating readOnly value={beer.rating} size="large" precision={0.5} />
				<Typography sx={{ color: "rgba(0,0,0,0.6)" }} variant="h5">
					{beer.rating.toFixed(1)}
				</Typography>
			</Box>
		</Box>
	);
}
