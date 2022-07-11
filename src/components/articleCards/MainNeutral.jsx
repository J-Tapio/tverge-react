import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import backupImage from '../../assets/the-verge-banner2.png';

//==============================================================================

function MainNeutral({article}) {
  let {Author, Image, Title, URL} = article;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "column",
        },
        height: {
          xs: 200,
          md: 300,
          lg: 350,
          xl: 400,
        },
        "& .main-news-base-title-section": {
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
            sm: "top"
          },
          backgroundColor: "#000000",
          height: {
            md: "40%",
          },
          width: "100%",
          padding: {
            xs: "1rem",
            //sm: "1rem",
          },
        },
        "& img": {
          objectFit: "cover",
          height: {
            md: "60%",
          },
          width: {
            xs: "30%",
            md: "100%",
          },
        },
        "& .main-news-base-heading": {
          transition: "0.25s",
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            md: "1rem",
            lg: "1.2rem",
            xl: "1.3rem"
          },
        },
        "& .main-news-base-heading:hover": {
          transition: "0.25s",
          cursor: "pointer",
          color: "#b30e61",
        },
        "& .main-news-base-author": {
          textTransform: "uppercase",
          fontSize: {
            xs: "0.8rem",
            sm: "1rem",
            xl: "1.2rem",
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
      <Box
        component="img"
        src={Image ? Image : backupImage}
        alt={"Main article"}
        sx={{ objectFit: "cover" }}
      />
      <Box className="main-news-base-title-section">
        <Link href={URL} color="inherit" underline="none" rel="noreferrer" target="_blank">
          <h3 className="main-news-base-heading">{Title}</h3>
        </Link>
        <sub
          className="main-news-base-author"
        >
          by <span>{Author}</span>
        </sub>
      </Box>
    </Box>
  );
}

export default MainNeutral;