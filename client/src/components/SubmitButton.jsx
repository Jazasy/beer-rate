import { Button } from "@mui/material";

export default function SubmitButton({ handleClick }) {
	return (
		<Button
			sx={{ my: 1, mb: 2, width: { xs: 1, md: "60%" }, alignSelf: "center" }}
			variant="contained"
			onClick={handleClick}
		>
			Submit
		</Button>
	);
}
