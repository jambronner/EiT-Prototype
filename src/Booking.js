import React from "react";
import "./Booking.css";

const Booking = () => {
  const candidate = {
    name: "Jordan B.",
    location: "New York, NY",
    bio:
      "Jordan is a seasoned Senior Product Manager with a rich background in technology and business strategy. Currently, he is a Senior Product Manager at Google, where he leads cross-cutting initiatives for the Digital Identity team. With over a decade of experience in the industry, Jordan has honed his leadership skills, driving cross-organizational alignment and fostering effective communication within diverse teams. His ability to bridge the gap between technology and business has earned him accolades and recognition throughout his career. Prior to joining Google, Jordan made significant contributions as a Product Manager at BCG, where he spearheaded strategic initiatives that resulted in substantial revenue growth for the company. He also excelled at ByteDance, where he led high-performing teams in the development of innovative products and solutions that transformed the digital landscape.",
    companyLogos: [
      "/CandidateImages/google.png",
      "/CandidateImages/bcg.png",
      "/CandidateImages/bytedance.png"
    ],
    image: "/CandidateImages/JordanBImg.jpeg"
  };

  const { name, location, bio, companyLogos, image } = candidate;

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="booking-card-image">
          <img src={image} alt="Candidate" />
        </div>
        <div className="booking-card-details">
          <h2 className="candidate-name">{name}</h2>
          <h3 className="candidate-location">{location}</h3>
          <p className="candidate-bio1">
            Jordan is a seasoned Senior Product Manager with a rich background
            in technology and business strategy. Currently, he is a Senior
            Product Manager at Google, where he leads cross-cutting initiatives
            for the Digital Identity team.
          </p>
          <p className="candidate-bio2">
            With over a decade of experience in the industry, Jordan has honed
            his leadership skills, driving cross-organizational alignment and
            fostering effective communication within diverse teams. His ability
            to bridge the gap between technology and business has earned him
            accolades and recognition throughout his career.
          </p>
          <p className="candidate-bio3">
            Prior to joining Google, Jordan made significant contributions as a
            Product Manager at BCG, where he spearheaded strategic initiatives
            that resulted in substantial revenue growth for the company. He also
            excelled at ByteDance, where he led high-performing teams in the
            development of innovative products and solutions that transformed
            the digital landscape.
          </p>
          <div className="company-logos">
            {companyLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
            ))}
          </div>
          <div className="booking-buttons">
            <button className="message-button">Message Expert</button>
            <button className="schedule-button">Schedule Interview Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
