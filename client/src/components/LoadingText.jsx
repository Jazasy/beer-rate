import { Typography } from "@mui/material";
import { loadingTextStyle } from "../styles";

export default function LoadingText({text}) {
	return (
		<Typography
			variant="h3"
			align="center"
			sx={loadingTextStyle}
		>
			{text}
		</Typography>
	);
}
