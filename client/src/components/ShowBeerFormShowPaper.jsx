import { Paper, Box, TextField, Rating } from "@mui/material";
import {
	showReviewPaperStyle,
	showReviewFormStyle,
	showNameTextStyle,
	showNoteTextStyle,
	showRatingStyle,
} from "../styles";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import SubmitButton from "./SubmitButton";

export default function ShowBeerFormShowPaper({ id, fetchBeer }) {
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
		if (reviewData.rating === 0) {
			toast.error("You have to pick a rating!");
		} else {
			try {
				await axios.post(`reviews/${id}`, reviewData);
				fetchBeer();
				setReviewData({ name: "", note: "", rating: 0 });
				toast.success("Rating submitted!");
			} catch (error) {
				toast.error("An error occured during submition");
			}
		}
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
			<SubmitButton handleClick={submitReview} />
		</Paper>
	);
}
