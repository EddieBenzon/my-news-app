import React, { useEffect, useState } from "react";
import { API_KEY } from "../context";

const API_LATEST_NEWS: string =
  "https://newsapi.org/v2/top-headlines?language=en&pageSize=10&page=";

const LatestNewsWidget = () => {
  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState<LatestnewsType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  type LatestnewsType = {
    publishedAt: string;
    title: string;
  };

  const fetchLatestNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_LATEST_NEWS}${pageNumber.toString()}${API_KEY}`
      );
      const data = await response.json();
      const newArray = data.articles;
      setLatest([...latest, ...newArray]);
      setLoading(false);
    } catch (error) {
      console.log("There was a following error:", error);
      setLoading(false);
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (
      event.currentTarget.clientHeight + event.currentTarget.scrollTop + 1 >=
      event.currentTarget.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchLatestNews();
  }, [pageNumber]);

  const convertDate = (time: string) => {
    const newDate = new Date(time);
    return newDate.toLocaleTimeString();
  };

  return (
    <div className="latest-news-wrapper">
      <div className="title-container">
        <span className="circle-outer">
          <span className="circle-inner"></span>
        </span>
        Latest News
      </div>

      <div className="scroller-container" onScroll={handleScroll}>
        {latest.map((item, index) => {
          return (
            <div key={index} className="single-latest-card">
              <p>{convertDate(item.publishedAt)}</p>
              <h3>{item.title}</h3>
            </div>
          );
        })}
        {loading && <div className="loading-animation"></div>}
      </div>
      <div className="footer-container">
        <p>See all news</p> <span></span>
      </div>
    </div>
  );
};

export default LatestNewsWidget;
