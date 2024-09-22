import "./ListStyle.css";

function ListStyle() {
  const categories = [
    "All",
    "Music",
    "React Routers",
    "Computer Programming",
    "Movies",
    "India News",
    "Cricket",
    "News",
    "Football",
    "Learn Coding",
    "Dubbing",
    "Mixes",
    "1990s",
    "Live",
    "Remedy",
    "Sports",
    "Yoga",
    "Cooking",
    "Dance",
  ];

  return (
    <div>
      <div className="catg">
        {categories.map((category) => (
          <div className="category" key={category}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListStyle;
