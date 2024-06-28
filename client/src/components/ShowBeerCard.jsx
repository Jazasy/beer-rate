import { Card } from "@mui/material";
import { showBeerCardStyle } from "../styles";
import ShowCardHeadBox from "./ShowCardHeadBox";

import ShowCardContent from "./ShowCardContent";

export default function ShowBeerCard({ beer }) {
	return (
		<Card sx={showBeerCardStyle}>
			<ShowCardHeadBox beer={beer} />
			<ShowCardContent beer={beer} />
		</Card>
	);
}
