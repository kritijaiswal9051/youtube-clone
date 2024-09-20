import { useState } from "react";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sideBar/SideBar";
import "./Home.css";

function Home({ sidebar }) {
  const [category, setCategory] = useState(0);
  return (
    <>
      <SideBar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
