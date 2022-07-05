import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

//==============================================================================


export default function MainBottom({article}) {
  let { Author, Title, URL } = article;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "300px",
        color: "#000000",
        padding: "6rem",
        "& .article-title": {
          fontWeight: "600",
          fontSize: {
            xs: "1.4rem",
            lg: "1.6rem",
          },
          transition: "0.25s",
          maxWidth: "90%",
        },
        "& .article-title:hover": {
          color: "#a20e51",
        },
        "& .verge-clone-title": {
          display: {
            xs: "none",
            md: "block",
          },
          fontSize: "2.5rem",
          fontWeight: "700",
          textTransform: "uppercase",
          fontStyle: "italic",
          letterSpacing: ".008em",
          lineHeight: ".9",
        },
        "& .author-section": {
          textTransform: "uppercase",
          fontWeight: "600",
        },
      }}
    >
      <Box>
        <Link href={URL} color="inherit" underline="none" rel="noreferrer" target="_blank">
          <Typography className="article-title">{Title}</Typography>
        </Link>
        <Typography className="author-section" variant="p">
          by <span>{Author}</span>
        </Typography>
      </Box>
      <Typography className="verge-clone-title">The Verge Clone</Typography>
    </Box>
  );
}
