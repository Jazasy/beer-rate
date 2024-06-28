import { Typography } from "@mui/material";
import { loadingTextStyle } from "../styles";

export default function LoadingText() {
	return (
		<Typography
			variant="h3"
			align="center"
			sx={loadingTextStyle}
		>
			Loading...
		</Typography>
	);
}
