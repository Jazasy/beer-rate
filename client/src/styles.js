const homeContainerStyle = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    justifyContent: "space-between",
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

export {
    homeContainerStyle,
    homeBeerCardStyle,
    showBeerCardStyle,
    showReviewPaperStyle,
    showRatingStyle,
    showNameTextStyle,
    showNoteTextStyle,
    showReviewFormStyle
};
