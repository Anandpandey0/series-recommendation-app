import React from "react";
import "./styles.css";
import { useState } from "react";

const seriesDB = {
  "Sci-Fi": [
    { name: "Dark", rating: "8/10", desc: "It is based on time theory.It is said that after a span of 33years history repeats itself."  },
    { name: "Stranger Things", rating: "9.2/10", desc: "It is kid drama. A child gains some supernatural power when she was made to go through some of the tests by the Russians. Now , this girl do all things to protect her friends." },
    {
      name: "Another life",
      rating: "9.1/10", desc: "A surprising mixed bag of science fiction. For everything it gets wrong, it gets right. Intense Alien homage and unbelievability all smooshed into one story "
    },
    
  ],

  Supernatural_beings: [
    { name: "Vampire Diaries", rating: "9.5/10", desc: "It is love triangle series based on the story of vampires. Two brothers who were vampires fall for the same girl and a lot of tragedy happens" },
    { name: "The Originals", rating: "9.0/10", desc: "It is story of the original supernatural beings. A witch mother makes her children vampires in order to protect them from death. They were known as `Original Vampires` , who can't be killed ." },
    { name: "Lucifier", rating: "8/10", desc: "A love story drama triller series." },
  
  ],
  Love: [
    { name: "You", rating: "9.6/10", desc: "A pysho-killer man falls in love with a girl and for that girl he kills everybody in order to protect her. " },
    { name: "13 reason's why", rating: "7.5/10", desc: "A girl sucide leaving behind 13 tapes in which she explains the each reason for which she took her life." },
    { name: "Little Things", rating: "8.1/10", desc: "A couple cum friens tries to start a living relatonship. This series tell the difficuties faced by them" },
   
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sci-Fi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1><span role="img" aria-label="series">💻</span> Netflix Series Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout some series which I will recommend , Just start by choosing a genre.{" "}
      </p>

      <div>
        {Object.keys(seriesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className = "first">
        <ul >
          {seriesDB[selectedGenre].map((series) => (
            <li
              key={series.name}
             
            >
              {" "}
              <div className="name"> {series.name} </div>
              <div className="rating"> {series.rating} </div>
              <div className="desc"> {series.desc} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}