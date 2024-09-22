import "./PlayVedio.css";

import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_convert } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVedio() {
  const { vedioId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channel, setChannel] = useState(null);
  const [comment, setComment] = useState([]);

  const fetchVideoData = async () => {
    // Fetch vedio data
    const videoDetailURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${vedioId}&key=${API_KEY}`;
    try {
      const response = await fetch(videoDetailURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApiData(data.items[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchOtherData = async () => {
    // Fetch Other data
    const videoOtherURL = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    try {
      const response = await fetch(videoOtherURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setChannel(data.items[0]);
    } catch (err) {
      setError(err.message);
    }

    // Fetch Comment Data
    const commentURL = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${vedioId}&key=${API_KEY}
    `;
    try {
      const response = await fetch(commentURL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComment(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [vedioId]);
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-vedio">
      {/* <video src={video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${vedioId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_convert(apiData.statistics.viewCount) : "16K"} views
          &bull;
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "a moment ago"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_convert(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channel ? channel.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channel ? value_convert(channel.statistics.subscriberCount) : "1M"}{" "}
            Subscriber
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-discription">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_convert(apiData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>

        {comment.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_convert(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVedio;
