import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FeedFeatured from "../articleCards/FeedFeatured";
import FeedNeutral from "../articleCards/FeedNeutral";
import vergeImg from "../../assets/the-verge-banner2.png";

//==============================================================================

function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export default function NewsFeedMain() {
  const NEWS_API = process.env.REACT_APP_NEWS_API;
  const [allNews, setAllNews] = useState([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  const [showBackupNews, setShowBackupNews] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  const backUpArticles = Array.from({ length: 10 }, () => ({
    Author: "The Verge",
    Title: "The Verge Clone",
    Comments: "10",
    URL: "https://www.theverge.com",
    Image: vergeImg,
    Date: "2022-06-06T00:00:00",
  }));

  async function fetchFeedNews() {
    try {
      let response = await fetch(NEWS_API + "/feed-news");
      if (response.ok) {
        let data = await response.json();
        if (data.length > 0) {
          return data;
        } else {
          return [];
        }
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function fetchFeaturedNews() {
    try {
      let response = await fetch(NEWS_API + "/featured-news");
      if (response.ok) {
        let data = await response.json();
        if (data.length > 0) {
          return data;
        } else {
          return [];
        }
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  function composeNewsElements(feedNews, featuredNews) {
    let newsElements = [];
    let featuredIndex = 0;
    for (let i = 0; i < feedNews.length; i++) {
      if (i > 0 && featuredIndex < featuredNews.length && i % 3 === 0) {
        newsElements.push(
          <FeedFeatured
            key={featuredNews[featuredIndex].Title}
            article={featuredNews[featuredIndex]}
            inFeed={true}
          />
        );
        newsElements.push(
          <FeedNeutral key={feedNews[i].Title} article={feedNews[i]} />
        );
        featuredIndex++;
      } else {
        newsElements.push(
          <FeedNeutral key={feedNews[i].Title} article={feedNews[i]} />
        );
      }
    }
    return newsElements;
  }

  async function handleNewsFeed() {
    try {
      let feedNews = await fetchFeedNews();
      let featuredNews = await fetchFeaturedNews();
      if (feedNews.length > 0 && featuredNews.length > 0) {
        console.log("WUT??")
        setAllNews(composeNewsElements(feedNews, featuredNews));
        setTimeout(function revealAllNews() {
          setShowLoadingSpinner(false);
          setShowAllNews(true);
          clearTimeout(revealAllNews);
        }, 1000);
      } else {
        setTimeout(function revealBackupNews() {
          setShowLoadingSpinner(false);
          setShowBackupNews(true);
          clearTimeout(revealBackupNews);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleNewsFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showLoadingSpinner && <Loader />}
      {showBackupNews &&
        backUpArticles.map((article, index) => (
          <FeedNeutral key={article.Title + index} article={article} />
        ))}
      {showAllNews && allNews}
    </>
  );
}
