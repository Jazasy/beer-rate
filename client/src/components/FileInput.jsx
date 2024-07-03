import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function FileInput({handleChange, beerData}) {
	return (
		<Button
			sx={{
				backgroundColor: "rgba(255,255,255,0.6)",
				color: "rgba(0,0,0,0.5)",
				borderColor: "rgba(0,0,0,0.2)",
				"&:hover": {
					borderColor: "black",
					backgroundColor: "rgba(255,255,255,0.6)",
				},
			}}
			component="label"
			role={undefined}
			variant="outlined"
			tabIndex={-1}
			startIcon={<CloudUploadIcon />}
		>
			Upload file
			<VisuallyHiddenInput
				type="file"
				value={beerData.image}
				name="image"
				onChange={handleChange}
			/>
		</Button>
	);
}
