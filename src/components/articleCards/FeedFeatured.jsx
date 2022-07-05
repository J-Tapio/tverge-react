import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import backupImage from "../../assets/the-verge-banner2.png";

//==============================================================================

export default function FeedFeatured({article, inFeed}) {
  let { Author, Image, Title, URL, PullQuote } = article;
  return (
    <Box
      mb={1}
      color="#fff"
      sx={{
        display: "flex",
        flexDirection: {
          md: "column",
        },
        height: {
          xs: 200,
          md: 350,
          lg: 550,
          xl: 600,
        },
        "& .main-news-base-title-section": {
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            sm: "center",
            md: "top"
          },
          backgroundColor: "#000000",
          height: {
            md: "30%",
          },
          width: "100%",
          padding: {
            xs: "0.8rem",
            sm: "1rem",
          },
        },
        "& img": {
          objectFit: "cover",
          height: {
            md: "70%",
          },
          width: {
            xs: "30%",
            md: "100%",
          },
        },
        "& .main-news-base-heading": {
          textTransform: "uppercase",
          letterSpacing: "-.008rem",
          transition: "0.25s",
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
            lg: "1.3rem",
          },
        },
        "& .main-news-base-heading:hover": {
          transition: "0.25s",
          cursor: "pointer",
          color: "#b30e61",
        },
        "& .pullquote": {
          paddingTop: {
            lg: ".3rem",
          },
          fontSize: {
            sm: "0.8rem",
            lg: "0.9rem",
          },
        },
        "& .main-news-base-author": {
          textTransform: "uppercase",
          fontSize: {
            xs: "0.8rem",
            sm: "0.9rem",
            lg: "1rem",
          },
          marginTop: "0.4rem",
          "& span": {
            color: "#e2127A",
          },
          "& span:hover": {
            color: "#a20e51",
            cursor: "pointer",
          },
        },
      }}
    >
      <Box className="main-news-base-title-section">
        <Link href={URL} color="inherit" underline="none" rel="noreferrer" target="_blank">
          <h3 className="main-news-base-heading">{Title}</h3>
        </Link>
        {PullQuote && (
          <Typography variant="p" className="pullquote">
            {PullQuote}
          </Typography>
        )}
        <Typography
          variant="p"
          className="main-news-base-author"
        >
          By <Typography variant="span">{Author}</Typography>
        </Typography>
      </Box>
      <Box
        component="img"
        src={Image ? Image : backupImage}
        alt={"Main article"}
      />
    </Box>
  );
}
