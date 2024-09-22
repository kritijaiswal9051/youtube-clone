import { useParams } from "react-router-dom";
import PlayVedio from "../../components/playVedio/PlayVedio";
import Recommended from "../../components/recommended/Recommended";
import "./Vedio.css";

function Vedio() {
  const { vedioId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVedio vedioId={vedioId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Vedio;
