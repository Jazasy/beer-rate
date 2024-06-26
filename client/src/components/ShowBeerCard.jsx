import { Card, Typography, CardMedia, Rating, Box } from "@mui/material";
import { showBeerCardStyle} from "../styles";
import ShowCardHeadBox from "./ShowCardHeadBox";

export default function ShowBeerCard({ beer }) {
	return (
		<Card sx={showBeerCardStyle}>
			<ShowCardHeadBox beer={beer} />
			<CardMedia
				sx={{ px: { xs: 3, md: "30%" } }}
				component="img"
				image={beer.image}
			/>
			<Typography variant="h4" align="center"></Typography>
		</Card>
	);
}
