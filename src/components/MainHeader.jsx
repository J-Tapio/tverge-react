/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backupBgImage from "../assets/the-verge-banner2.png";

//==============================================================================

function MainHeader() {
  const NEWS_API = process.env.REACT_APP_NEWS_API;
  const titleDate = format(new Date(), "EEEE, MMMM d, yyyy");
  let [quote, setQuote] = useState("");
  let [bgImage, setBgImage] = useState("");

  async function fetchImageAndQuote() {
    try {
      let data = await fetch(NEWS_API + "/image-quote");
      if (data.ok) {
        let [image, quote] = await data.json();
        setBgImage(image);
        setQuote(quote);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchImageAndQuote();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "300px",
        backgroundImage: `url(${bgImage ? bgImage : backupBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingX: "2rem",
          maxWidth: "1000px",
        }}
      >
        <Box
          sx={{
            maxWidth: "75%",
            margin: "0 auto",
          }}
        >
          <svg fill="#fff" viewBox="0 291.4 1280 217.2">
            <path d="M0 292.1v58.1h39.7v153.2h67.1V292.1M220.1 372.4h-31.4v-22.3h15.8v-58h-82.8v211.3h67v-79.9h31.4v79.9h67.2V292.1h-67.2M302 503.4h124.3v-58.2h-60.2v-24.6h38.3v-48.2h-38.3v-22.2h60.2v-58.1H302M954.8 363.6c0-45.6-33.7-71.5-81.5-71.5h-74.7v211.2h67.1v-54.1l38.4 54.1h75.7l-54.4-81c19.6-10.7 29.4-30.2 29.4-58.7M865.5 387v-39.3c9.3 0 20.7 2.8 24.1 13 .3.9.5 1.9.8 2.9 0 .1 0 .3.1.4.1 1 .3 2.2.3 3.4 0 15.7-14.3 19.6-25.3 19.6M559.2 420.8h-.6l-4.8-17.4-15-53.1h26.4l17.4-58.2h-134l76.8 211.2h68.8l8.3-22.6s36.8-99.8 56.9-154.2v176.8h124.3v-58.2h-60.2v-24.6h38.2v-48.1h-38.2v-22.2h60.2V292H598l-38.8 128.8zM1280 350.3v-58.1h-124.3v211.2H1280v-58.2h-60.3v-24.6h38.3v-48h-38.3v-22.3"></path>
            <path d="M1142.8 459.1V373H1048v48h35.3v17.1c-2.7 2.4-8.5 3.7-14.5 3.7-24.6 0-42.8-19.4-42.8-43.1s17.7-44.7 42.3-44.7c14.9 0 50.2.1 50.2.1v-62.6h-16.1c-30 0-59.9-2.4-87.4 11.8-21.7 11.2-38.9 30.2-48 52.8-5.3 13.3-8 27.7-8 42 0 59.9 47 110.4 107.9 110.4 30.2 0 59.7-11.3 75.8-25.4.1-14.6.1-16.8.1-24"></path>
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: {
              xs: ".6rem",
              sm: "1.1rem",
            },
            fontWeight: "500",
            color: "#ffffff",
            textTransform: "uppercase",
            marginTop: "1rem",
          }}
        >
          <Typography variant="p">{titleDate}</Typography>
          <Typography
            variant="p"
            style={{
              paddingLeft: "0.3rem",
              paddingRight: "0.3rem",
            }}
          >
            |
          </Typography>
          <Typography variant="p">
            {quote ? quote : "The Verge Clone"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainHeader;
