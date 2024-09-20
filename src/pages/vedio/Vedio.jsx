import PlayVedio from "../../components/playVedio/PlayVedio";
import Recommended from "../../components/recommended/Recommended";
import "./Vedio.css";

function Vedio() {
  return (
    <div className="play-container">
      <PlayVedio />
      <Recommended />
    </div>
  );
}

export default Vedio;
