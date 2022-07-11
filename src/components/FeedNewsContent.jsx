import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewsFeedMain from "./feedContent/NewsFeedMain";
import NewsFeedAside from "./feedContent/NewsFeedAside";

//==============================================================================

function MoreStoriesLink() {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "0 auto",
        marginTop: "5rem",
        backgroundColor: "#e2127A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "3.5rem",
        transition: "0.13s",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#b30e61",
        },
      }}
    >
      <Typography
        sx={{ color: "#fff", fontSize: "0.9rem", textTransform: "uppercase" }}
      >
        more stories
      </Typography>
    </Box>
  );
}

export default function FeedNewsContent() {
  return (
    <Grid
      container
      spacing={{xs: 0, sm: 2}}
      sx={{
        backgroundColor: "#fff",
        paddingTop: "3rem",
        paddingX: {
          xs: ".15rem",
          md: "3rem"
        },
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NewsFeedMain />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <NewsFeedAside />
      </Grid>
        <MoreStoriesLink />
    </Grid>
  );
}
