import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import backupImage from '../../assets/the-verge-banner2.png';

//==============================================================================

function MainHighlighted({reverse, article}) {
  let {Author, Image, Title, URL} = article;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "row",
          md: reverse ? "row-reverse" : "row"
        },
        alignItems: "center",
        backgroundColor: "#000000",
        height: {
          xs: 200,
          sm: 250,
          md: 300,
          lg: 350,
          xl: 400,
        },
        "& img": {
          objectFit: "cover",
          height: "100%",
          width: {
            xs: "30%",
          },
          minWidth: {
            md: "50%",
          }
        },
        "& .news-header-section-focused": {
          display: "flex",
          flexDirection: "column",
          letterSpacing: "0.008em",
          textAlign: {
            sm: "left",
            md: reverse ? "right" : "left"
          },
          padding: {
            xs: "1rem",
            md: "2.185rem",
          },
        },
        "& .news-title-focused": {
          fontWeight: 600,
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
            md: "1.4rem",
            lg: "2.5rem",
          },
          letterSpacing: "0.008rem",
          textTransform: "uppercase",
          lineHeight: ".9",
          transition: "0.25s",
        },
        "& .news-title-focused:hover": {
          cursor: "pointer",
          color: "#b30e61",
        },
        "& .news-title-focused-author": {
          marginTop: "0.3rem",
          fontWeight: "600",
          textTransform: "uppercase",
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            xl: "1.2rem",
          },
        },
        "& .news-title-focused-author span": {
          color: "#e2127A",
          transition: "0.25s",
        },
        "& .news-title-focused-author span:hover": {
          color: "#a20e51",
          cursor: "pointer",
        },
      }}
    >
      <Box component="img" src={Image ? Image : backupImage} alt={"Main news article"} />
      <Box className="news-header-section-focused">
        <Link href={URL} underline="none" color="inherit" rel="noreferrer" target="_blank">
          <h2 className="news-title-focused">{Title}</h2>
        </Link>
        <sub className="news-title-focused-author">
          By <span>{Author}</span>
        </sub>
      </Box>
    </Box>
  );
}

export default MainHighlighted;