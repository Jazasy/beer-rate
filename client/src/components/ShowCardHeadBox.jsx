import { Box } from "@mui/material";
import { showCardHeadBoxStyle } from "../styles";
import BeerRating from "./BeerRating";

export default function ShowCardHeadBox({ beer }) {
	return (
		<Box sx={showCardHeadBoxStyle}>
			{/* <Typography variant="h3" align="center">
				{beer.name}
			</Typography> */}
			<h1 className="beerCardTitle">{beer.name}</h1>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<BeerRating beer={beer} />
			</Box>
		</Box>
	);
}
