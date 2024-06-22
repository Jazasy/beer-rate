import { Card, Typography, CardMedia, Rating } from "@mui/material";
import { showBeerCardStyle } from "../styles";

export default function ShowBeerCard({ beer }) {
	return (
		<Card sx={showBeerCardStyle}>
			<Typography
				variant="h3"
				align="center"
				sx={{
					backgroundColor: "rgba(255,255,255,0.6)",
					width: "fit-content",
					borderRadius: "999px",
					p: 1,
					mb: 2,
					alignSelf: "center",
				}}
			>
				{beer.name}
				<Rating readOnly value={beer.rating} size="large" precision={0.5} />
			</Typography>
			<CardMedia
				sx={{ px: { xs: 3, md: "30%" } }}
				component="img"
				image={beer.image}
			/>
			<Typography variant="h4" align="center"></Typography>
		</Card>
	);
}
