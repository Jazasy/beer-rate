import {
	Card,
	Typography,
	CardMedia,
	Rating,
	Box,
	CardContent,
	Grid,
} from "@mui/material";
import { showBeerCardStyle } from "../styles";
import ShowCardHeadBox from "./ShowCardHeadBox";

export default function ShowBeerCard({ beer }) {
	return (
		<Card sx={showBeerCardStyle}>
			<ShowCardHeadBox beer={beer} />
			<Grid container>
				<Grid item xs={6}>
						<CardContent>
							<Typography variant="body1">
								Az ország egyik kedvenc sörét, a Borsodi világost 1973 óta
								folyamatosan tökéletesítjük fogyasztóinknak. Így a kiváló
								minőségű, láger típusú sörünket mára tisztán árpamalátából,
								kukoricadara nélkül főzzük. A Borsodi Világos íze az évek során
								még kiegyensúlyozottabb lett, de továbbra is jellemző rá a
								kellemes keserűség és a csillogó aranysárga szín, melyet dús,
								finom pórusú hab koronáz.
							</Typography>
						</CardContent>
				</Grid>
				<Grid item xs={6}>
					<CardMedia
						/* sx={{ px: { xs: 3, md: "30%" } }} */
						component="img"
						image={beer.image}
					/>
				</Grid>
			</Grid>
		</Card>
	);
}
