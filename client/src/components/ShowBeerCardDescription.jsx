import { CardContent, Typography } from "@mui/material";

export default function ShowBeerCardDescription({beer}) {
	return (
		<CardContent>
			<Typography
				variant="subtitle1"
				sx={{ fontWeight: 700, fontSize: "20px", textAlign: "justify" }}
			>
				{beer.description}
			</Typography>
		</CardContent>
	);
}
