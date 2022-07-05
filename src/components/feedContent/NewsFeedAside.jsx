import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayBtnIcon from "@mui/icons-material/PlayArrowRounded";
import backupImg from "../../assets/the-verge-banner2.png";
import VergeDeals from "../feedContent/VergeDeals";

//==============================================================================

function AsideTitle() {
  return (
    <Link
      href={"https://www.theverge.com/featured-video"}
      color="inherit"
      underline="none"
      rel="noreferrer"
      target="_blank"
    >
      <Typography
        variant="p"
        sx={{
          fontSize: {
            md: "2rem",
            lg: "2.2rem",
          },
          fontFamily: "Heroic",
          textTransform: "uppercase",
          letterSpacing: "1.003px",
          color: "#e2127a",
          "&:hover": {
            cursor: "pointer",
            color: "#b30e61",
          },
          "&::after": {
            position: "absolute",
            backgroundColor: "#393092",
            content: "''",
            height: "2px",
            top: {
              md: "2.2rem",
              lg: "2.4rem",
            },
            left: "15px",
            right: 0,
            zIndex: 1,
          },
          "&::before": {
            position: "absolute",
            backgroundColor: "#393092",
            content: "''",
            height: "2px",
            width: "25px",
            transform: "rotate(-120deg)",
            transformOrigin: "bottom",
            top: {
              md: "1.45rem",
              lg: "1.65rem",
            },
            left: "-.19rem",
            zIndex: 1,
          },
        }}
      >
        featured videos
      </Typography>
    </Link>
  );
}

function AsideVideoArticle({ article, containerStyle }) {
  let { Title, URL, Image } = article;
  function handlePageChange(event) {
    window.open(URL, "_blank");
  }
  return (
    <Box sx={{ ...containerStyle }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={Image}
          alt={"Video article"}
          sx={{ width: "100%", objectFit: "cover", height: "200px" }}
        />
        <PlayBtnIcon
          onClick={handlePageChange}
          sx={{
            position: "absolute",
            right: "45%",
            top: "40%",
            fontSize: "3rem",
            color: "#e2127a",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "50%",
            "&:hover": {
              cursor: "pointer",
              color: "#b30e61",
              backgroundColor: "rgba(255,255,255,1)",
            },
          }}
        />
      </Box>
      <Link
        href={URL}
        color="inherit"
        underline="none"
        rel="noreferrer"
        target="_blank"
      >
        <Typography className="asideVideoNewsTitle" sx={{ textAlign: "left" }}>
          {Title}
        </Typography>
      </Link>
    </Box>
  );
}

function AsideVideoArticles() {
  let [asideArticles, setAsideArticles] = useState([]);
  const NEWS_API = process.env.REACT_APP_NEWS_API;

  const backupArticles = Array.from({ length: 3 }, () => ({
    Title: "The Verge Clone - Resource not available",
    Image: backupImg,
  }));

  async function fetchAsideArticles() {
    try {
      let response = await fetch(NEWS_API + "/video-articles");
      if (response.ok) {
        let articles = await response.json();
        if (articles.length > 0) {
          setAsideArticles(articles);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAsideArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        "& .asideVideoNewsTitle": {
          fontSize: "0.9rem",
          transition: "0.125s",
        },
        "& .asideVideoNewsTitle:hover": {
          cursor: "pointer",
          color: "#e2127a",
        },
      }}
    >
      {asideArticles.length < 1 &&
        backupArticles.map((article, index) => {
          if (index === 0) {
            return (
              <AsideVideoArticle
              key={article.Title + index}
                article={article}
                containerStyle={{ paddingTop: "1rem" }}
              />
            );
          } else {
            return (
              <AsideVideoArticle
                key={article.Title + index}
                article={article}
                containerStyle={{ marginTop: "0.5rem" }}
              />
            );
          }
        })
      }
      {asideArticles.length > 1 &&
        asideArticles.map((article, index) => {
          //TODO: Find out where the fourth comes from scraping. Page shows always three video article reviews.
          if (index === 0) {
            return (
              <AsideVideoArticle
                key={article.URL}
                article={article}
                containerStyle={{ paddingTop: "1rem" }}
              />
            );
          } else {
            return (
              <AsideVideoArticle
                key={article.URL}
                article={article}
                containerStyle={{ marginTop: "0.5rem" }}
              />
            );
          }
        })}
    </Box>
  );
}

export default function NewsFeedAside() {
  return (
    <Box
      sx={{
        marginTop: ".5rem",
        paddingBottom: "3rem",
        position: "relative",
        textAlign: "center",
      }}
    >
      <AsideTitle />
      <Box
        sx={{
          borderRight: "2px solid #393092",
          paddingRight: ".5rem",
        }}
      >
        <AsideVideoArticles />
      </Box>
      <VergeDeals />
    </Box>
  );
}
