import { Container, Paper, TextField, Typography, Box } from "@mui/material";

export default function Add() {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Paper
				sx={{
					mt: 10,
					p: 2,
					pb: 1,
					width: 1,
					backgroundColor: "rgba(255,255,255,0.6)",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box
					sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
				>
					<TextField
						label="Name of beer"
						sx={{
							backgroundColor: "rgba(255,255,255,0.6)",
							mb: 1,
							mr: 1,
							width: { xs: 1, md: 0.3 },
						}}
					/>
					<TextField
						label="Country of beer"
						sx={{ backgroundColor: "rgba(255,255,255,0.6)", mb: 1, width: 1 }}
					/>
				</Box>
				<TextField
					label="Description of beer"
					sx={{ backgroundColor: "rgba(255,255,255,0.6)", mb: 1 }}
					multiline
					rows={4}
				/>
			</Paper>
		</Container>
	);
}
