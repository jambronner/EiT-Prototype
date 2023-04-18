import React, { useState, useEffect } from "react";
import "./TalentList.css";
import JordanB from "./CandidateImages/JordanBImg.jpeg";
import AnikaS from "./CandidateImages/AnikaSImg.jpeg";
import MichelleM from "./CandidateImages/MichelleMImg.jpeg";
import Google from "./CandidateImages/google.png";
import Snap from "./CandidateImages/snapchat.png";
import Asana from "./CandidateImages/Asana.png";
import Slack from "./CandidateImages/slack.png";
import LoadingPage from "./LoadingPage";
import BookingPage from "./Booking";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardItems, setCardItems] = useState([
    // Update with your own card data
    {
      id: 1,
      image: JordanB,
      name: "Jordan B.",
      icons: [Google],
      bulletPoints: [
        "Ran task force to build cross-org efficiency at Google",
        "Supported Series C fintech client with org design",
        "First 50 employee at consumer social startup. Saw 10x headcount growth. "
      ]
    },
    {
      id: 2,
      image: AnikaS,
      name: "Anika S.",
      icons: [Snap],
      bulletPoints: [
        "Leads bizops for gaming unicorn",
        "Built reporting tools for executive alignment",
        "Former founder at 250-person company bought by Snap"
      ]
    },
    {
      id: 3,
      image: MichelleM,
      name: "Michelle M.",
      icons: [Asana, Slack],
      bulletPoints: [
        "Full-time communication efficiency consultant",
        "Managed internal comms for 2 B2B productivity apps",
        "Wrote bestselling novel on breaking down communication siloes"
      ]
    }
    // Add more card items as needed
  ]);

  const [page, setPage] = useState("talentlist"); // Initialize page state to "talentlist"
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === 37) {
      // Left arrow key
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardItems.length - 1 : prevIndex - 1
      );
    } else if (e.keyCode === 39) {
      // Right arrow key
      setCurrentIndex((prevIndex) =>
        prevIndex === cardItems.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to run effect only once

  // Handle onClick action
  const handleOnClick = () => {
    // Show LoadingPage for 200ms
    setPage("loading");
    console.log("setPage loading");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage("booking"); // Update page state to booking
    }, 2000);
  };

  // Render component based on page state
  if (page === "loading") {
    return <LoadingPage />;
  } else if (page === "booking") {
    return <BookingPage />;
  } else {
    // Render CardCarousel component

    return (
      <div>
        <h1>
          We have great expert consultants available to support your comms
          improvement goals
        </h1>
        <h2>Here are just a few</h2>
        <h3>
          Need more options? Explore our{" "}
          <a href="https://www.execsintech.com"> directory </a>
        </h3>
        <div className="card-carousel-container">
          <div
            className="card-carousel"
            style={{
              transform: `translateX(calc(-33.33% * ${currentIndex - 1}))`
            }}
          >
            {cardItems.map((card, index) => {
              const isActive = currentIndex === index;
              const isPrev =
                currentIndex === index - 1 ||
                (index === 0 && currentIndex === cardItems.length - 1);
              const isNext =
                currentIndex === index + 1 ||
                (index === cardItems.length - 1 && currentIndex === 0);
              return (
                <div
                  key={card.id}
                  className={`card ${isActive ? "active" : ""} ${
                    isPrev ? "prev" : ""
                  } ${isNext ? "next" : ""}`}
                >
                  <img src={card.image} alt={card.name} />
                  <h2>{card.name}</h2>
                  <ul className="icons">
                    {card.icons.map((icon, i) => (
                      <li key={i}>
                        <img src={icon} alt={`Icon ${i + 1}`} />
                      </li>
                    ))}
                  </ul>
                  <ul className="bullet-points">
                    {card.bulletPoints.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <button className="learn-more-button" onClick={handleOnClick}>
                    Learn more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default CardCarousel;
