import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ShowBeerFormShowPaper from "./ShowBeerFormShowPaper";

export default function ShowBeerFormPaper({ id, fetchBeer }) {
	const [showForm, setShowForm] = useState(false);

	const theme = useTheme();
	const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

	const handleClick = () => {
		setShowForm((oldShowForm) => !oldShowForm);
	};

	useEffect(() => {
		!isMdDown && setShowForm(false);
	}, [isMdDown]);

	return (
		<>
			{isMdDown ? (
				!showForm && (
					<Button variant="contained" sx={{ width: 1 }} onClick={handleClick}>
						Rate Beer!
					</Button>
				)
			) : (
				<ShowBeerFormShowPaper id={id} fetchBeer={fetchBeer} />
			)}
			{showForm && <ShowBeerFormShowPaper id={id} fetchBeer={fetchBeer} />}
		</>
	);
}
