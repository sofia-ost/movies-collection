import { useState, useEffect } from "react";

export default function MovieList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://61dec0fafb8dae0017c2e24a.mockapi.io/film")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  if (error) return "Error...";
  console.log(data);

  return (
    <div className="movie-list">
      <div className=""></div>
    </div>
  );
}
