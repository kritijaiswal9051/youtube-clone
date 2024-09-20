import "./PlayVedio.css";

import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";
import video from "../../assets/video.mp4";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import ajjj from "../../assets/ajjj.png";
import user from "../../assets/user_profile.jpg";

function PlayVedio() {
  return (
    <div className="play-vedio">
      <video src={video} controls autoPlay muted></video>
      <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
      <div className="play-video-info">
        <p>115 views &bull; 1 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />3
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
        <img className="aj" src={ajjj} alt="" />
        <div>
          <p>Ankit jais</p>
          <span>1M</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-discription">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          velit.
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              jack nick <span>1 day ago</span>
              <p>
                quidem distinctio aut placeat tenetur sequi quod hic eveniet
                nulla ullam! Quibusdam obcaecati cumque recusandae.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </h3>
          </div>
        </div>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              jack nick <span>1 day ago</span>
              <p>
                quidem distinctio aut placeat tenetur sequi quod hic eveniet
                nulla ullam! Quibusdam obcaecati cumque recusandae.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </h3>
          </div>
        </div>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              jack nick <span>1 day ago</span>
              <p>
                quidem distinctio aut placeat tenetur sequi quod hic eveniet
                nulla ullam! Quibusdam obcaecati cumque recusandae.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </h3>
          </div>
        </div>
        <div className="comment">
          <img src={user} alt="" />
          <div>
            <h3>
              jack nick <span>1 day ago</span>
              <p>
                quidem distinctio aut placeat tenetur sequi quod hic eveniet
                nulla ullam! Quibusdam obcaecati cumque recusandae.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVedio;
