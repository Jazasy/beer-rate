import { Paper } from "@mui/material";
import ShowBeerReviewCard from "./ShowBeerReviewCard";

export default function ShowBeerReviewsPaper({ reviews }) {
	const fullReviews = reviews
		.filter((review) => review.note != "" && review.name != "")
		.reverse();
	return (
		<Paper sx={{ mt: 2, p: 2, backgroundColor: "rgba(255,255,255,0.6)" }}>
			{fullReviews.map((review) => (
				<ShowBeerReviewCard key={review._id} review={review} />
			))}
		</Paper>
	);
}
