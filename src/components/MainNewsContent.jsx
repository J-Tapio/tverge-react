import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MainHighlighted from "./articleCards/MainHighlighted";
import MainNeutral from "./articleCards/MainNeutral";
import MainBottom from "./articleCards/MainBottom";
import FeaturedArticle from "./articleCards/FeedFeatured";

//==============================================================================

export default function MainNewsContent() {
  const NEWS_API = process.env.REACT_APP_NEWS_API;
  let [news, setNews] = useState([]);

  let backupArticle = {
    Image: "",
    Title: "Backup title since resources not available",
    URL: "https://theverge.com",
    Author: "The Verge",
  };

  async function fetchMainNews() {
    try {
      let latestMainNews = await fetch(NEWS_API + "/main-news");
      if (latestMainNews.ok) {
        let articles = await latestMainNews.json();
        if (Array.isArray(articles) && articles.length > 0) {
          setNews(articles);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMainNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      columnSpacing={{xs: 0, sm:0.28}}
      rowSpacing={0.28}
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgb(247, 198, 38) 15%, rgb(246, 140, 47) 40%, rgb(229, 18, 125) 85%)",
        color: "white",
        width: "100%",
        maxWidth: "1300px",
        margin: {
          sm: "5rem 0 0 0",
          md: "5rem auto 0",
        },
        marginTop: {
          sm: "1rem",
          md: "5rem",
        },
        // Needed for adjusting the grid inside the background.
        paddingRight: "0.15rem",
        //Padding left needed only for mobile-view.
        paddingLeft: {
          xs: "0.15rem",
          sm: "0rem"
        }
      }}
    >
      {news.length > 0 &&
        news.map((article, index) => {
          // When The Verge site shows more than two main news
          if (news.length > 2) {
            if (index < 4) {
              if (index === 0) {
                return (
                  <Grid key={article.Title} item xs={12} lg={8.5}>
                    <MainHighlighted reverse={false} article={article} />
                  </Grid>
                );
              } else if (index === 3) {
                return (
                  <Grid key={article.Title} item xs={12} lg={8.5}>
                    <MainHighlighted reverse={true} article={article} />
                  </Grid>
                );
              } else {
                return (
                  <Grid key={article.Title} item xs={12} md={6} lg={3.5}>
                    <MainNeutral article={article} />
                  </Grid>
                );
              }
            }
            if (index === news.length - 1) {
              return (
                <Grid key={article.Title} item xs={12}>
                  <MainBottom article={article} />
                </Grid>
              );
            }
            return (
              <Grid key={article.Title} item xs={12} md={4} lg={4}>
                <MainNeutral article={article} />
              </Grid>
            );
          } else {
            // When The Verge shows only two main news
            return (
              <Grid key={article.Title} item xs={12} md={6} lg={6}>
                <FeaturedArticle article={article} reverse={false} />
              </Grid>
            );
          }
        })}

      {news.length < 1 && (
        <>
          <Grid item xs={12} lg={8.5}>
            <MainHighlighted reverse={false} article={backupArticle} />
          </Grid>
          <Grid item xs={12} md={6} lg={3.5}>
            <MainNeutral article={backupArticle} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainNeutral article={backupArticle} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <MainHighlighted reverse={true} article={backupArticle} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainNeutral article={backupArticle} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainNeutral article={backupArticle} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainNeutral article={backupArticle} />
          </Grid>
          <Grid item xs={12}>
            <MainBottom article={backupArticle} />
          </Grid>
        </>
      )}
    </Grid>
  );
}
