import { useState } from "react";
import axios from "axios";
import { Paper, Box, TextField, Rating, Button } from "@mui/material";
import {
	showReviewPaperStyle,
	showReviewFormStyle,
	showNameTextStyle,
	showNoteTextStyle,
	showRatingStyle,
} from "../styles";

export default function ShowBeerFormPaper({ id, fetchBeer }) {
	const [reviewData, setReviewData] = useState({
		name: "",
		note: "",
		rating: 0,
	});

	const handleChange = (event) => {
		setReviewData((oldReviewData) => {
			return {
				...oldReviewData,
				[event.target.name]:
					event.target.name === "rating"
						? Number(event.target.value)
						: event.target.value,
			};
		});
	};

	const submitReview = async () => {
		await axios.post(`reviews/${id}`, reviewData);
		fetchBeer();
	};

	return (
		<Paper sx={showReviewPaperStyle}>
			<Box sx={showReviewFormStyle}>
				<TextField
					sx={showNameTextStyle}
					id="outlined-basic"
					label="Displayed name"
					variant="outlined"
					name="name"
					value={reviewData.name}
					onChange={handleChange}
				/>
				<TextField
					sx={showNoteTextStyle}
					id="outlined-textarea"
					label="Tell your thoughts about this beer"
					name="note"
					value={reviewData.note}
					onChange={handleChange}
					multiline
				/>
			</Box>
			<Rating
				sx={showRatingStyle}
				name="rating"
				size="large"
				value={reviewData.rating}
				onChange={handleChange}
			/>
			<Button
				sx={{ my: 1, width: { xs: 1, md: "60%" }, alignSelf: "center" }}
				variant="contained"
				onClick={submitReview}
			>
				Submit
			</Button>
		</Paper>
	);
}
