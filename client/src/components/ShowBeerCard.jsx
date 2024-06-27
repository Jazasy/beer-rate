import { Card, CardMedia, Box, Button } from "@mui/material";
import { showBeerCardStyle } from "../styles";
import ShowCardHeadBox from "./ShowCardHeadBox";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import ShowBeerCardDescription from "./ShowBeerCardDescription";

export default function ShowBeerCard({ beer }) {
	const [showContent, setSchowContent] = useState(false);

	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	useEffect(() => {
		isMdUp && setSchowContent(false);
	}, [isMdUp]);

	const handleClick = () => {
		setSchowContent((oldShowContent) => !oldShowContent);
	};

	return (
		<Card sx={showBeerCardStyle}>
			<ShowCardHeadBox beer={beer} />
			<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
				<CardMedia
					sx={{ width: "300px", alignSelf: "center" }}
					/* sx={{ px: { xs: 3, md: "30%" } }} */
					component="img"
					image={beer.image}
				/>
				{isMdUp ? (
					<ShowBeerCardDescription beer={beer} />
				) : (
					<Button
						variant="text"
						sx={{ fontWeight: "700" }}
						onClick={handleClick}
					>
						{showContent ? "Less" : "Read more"}
					</Button>
				)}
				{showContent && <ShowBeerCardDescription beer={beer} />}
			</Box>
		</Card>
	);
}
