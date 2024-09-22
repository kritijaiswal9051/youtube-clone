import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import { Link } from "react-router-dom";
import { API_KEY, value_convert } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoListUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoListUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data.items);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => {
          if (item === null) return null; // Skip null items
          return (
            <Link
              key={item.id} // Use a unique key for each item
              to={`vedio/${item.snippet.categoryId}/${item.id}`}
              className="card"
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>
                {value_convert(item.statistics.viewCount)} views &bull;
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Feed;
