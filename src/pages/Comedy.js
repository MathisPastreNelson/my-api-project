import React from "react";
import axios from "axios";

// Les composants
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Comedy() {
  const fetchGenre = async () => {
    await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=f8aa98bfbb1c2940f9b235241e070eee&language=fr".then(
        (res) => {
          const data = res.data;
          this.setState({ data });
        }
      )
    );
  };

  console.log(fetchGenre());
  return (
    <div>
      <Header />
      <div>Comedy</div>
      <Footer />
    </div>
  );
}
