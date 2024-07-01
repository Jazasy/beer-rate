const homeContainerStyle = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    justifyContent: "space-around",
};

const homeBeerCardStyle = {
    my: 2,
    width: { xs: 1, md: "30%" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.6)"
};

const showBeerCardStyle = {
    my: 2,
    p: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.6)"
};

const showReviewPaperStyle = {
    display: "flex",
    flexDirection: "column",
    px: 2,
    backgroundColor: "rgba(255,255,255, 0.6)"
};

const showRatingStyle = {
    my: 1,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255, 0.6)",
    p: 1,
    borderRadius: 999,
}

const showNameTextStyle = {
    my: 1,
    width: { sx: 1, md: 0.3 },
    mr: { xs: 0, md: 1 },
    backgroundColor: "rgba(255,255,255, 0.6)",
}

const showNoteTextStyle = {
    my: 1,
    width: 1,
    backgroundColor: "rgba(255,255,255, 0.6)",
}

const showReviewFormStyle = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
}

const showCardHeadBoxStyle = {
    backgroundColor: "rgba(255,255,255,0.6)",
    width: "fit-content",
    borderRadius: "999px",
    display: "flex",
    alignSelf: "center",
    flexDirection: { xs: "column", md: "row" },
    px: 2,
    py: 0,
    mb: 2,
}

const loadingTextStyle = {
    fontWeight: 700,
    my: 20,
    backgroundColor: "rgba(255,255,255, 0.6)",
    borderRadius: 999,
    display: "flex",
    width: "fit-content",
    mx: "auto",
    p: 1,
}

export {
    homeContainerStyle,
    homeBeerCardStyle,
    showBeerCardStyle,
    showReviewPaperStyle,
    showRatingStyle,
    showNameTextStyle,
    showNoteTextStyle,
    showReviewFormStyle,
    showCardHeadBoxStyle,
    loadingTextStyle
};
