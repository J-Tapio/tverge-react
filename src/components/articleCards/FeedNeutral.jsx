import { format } from "date-fns";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

//==============================================================================

export default function FeedNeutral({ article }) {
  let {
    Author,
    Title,
    Comments,
    Image,
    Date: { articleDate },
    URL,
  } = article;

  return (
    <Box
      mb={1}
      sx={{
        display: "flex",
        height: {
          xs: "105px",
          sm: "110px",
          md: "130px",
        },
      }}
    >
      <Box
        component="img"
        src={Image}
        alt={"News"}
        sx={{ objectFit: "cover", minWidth: {xs: "100px", sm:"200px"}, maxWidth: {xs: "100px", sm:"200px"} }}
      />
      <Box
        sx={{
          borderTop: "1px solid #d9d9d9",
          width: "100%",
          marginRight: {
            xs: "0.15rem",
            md: "0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: {xs: ".5rem", sm:"1.125rem"},
            marginTop: {
              xs: "0.2rem",
              sm: "0.5rem",
              md: "1rem",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "0.8rem",
                md: "1rem",
                lg: "1.1rem",
              },
              transition: "0.25s",
              "&:hover": {
                color: "#b35ead",
              },
            }}
          >
            <Link href={URL} color="inherit" underline="none" rel="noreferrer" target="_blank">
              {Title}
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: ".3rem",
              maxWidth: "380px",
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
                md: "0.9rem",
              },
              "& .news-info--divider": {
                paddingX: {
                  xs: "0.05rem",
                  sm: "0.1rem",
                  md: "0.2rem",
                },
              },
              "& .news-author": {
                color: "#560761",
                fontWeight: {xs: "400", sm:"600"},
              },
            }}
          >
            <Typography variant="p">
              By <span className="news-author">{Author}</span>
            </Typography>
            <span className="news-info--divider">|</span>
            <Typography variant="p">
              {format(Date.now(Date.parse(articleDate)), "MMMM do")}
            </Typography>
            {
              Comments && <span className="news-info--divider">|</span>
            }
            <Typography variant="p">
              {Comments === 1 ? Comments + " comment" : Comments > 1 ? Comments + " comments" : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
