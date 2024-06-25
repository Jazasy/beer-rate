import { Card, Typography, Rating } from "@mui/material";

export default function ShowBeerReviewCard({ review }) {
	return (
		<Card sx={{ mb: 1, p: 1, backgroundColor: "rgba(255,255,255,0.6)" }}>
			<Typography variant="h6">{review.name}: </Typography>
			<Rating readOnly value={review.rating} precision={0.5} />
			<Typography variant="h5">{review.note}</Typography>
		</Card>
	);
}
