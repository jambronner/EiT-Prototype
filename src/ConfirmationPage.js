import React, { useState, useEffect } from "react";
import "./ConfirmationPage.css";
import LoadingPage from "./LoadingPage";
import CustomerProfilePage from "./CustomerProfilePage";

function ConfirmationPage({ question, yesLabel, noLabel, onYes, onNo }) {
  const [page, setPage] = useState("confirmation");
  const [typedResponse, setTypedResponse] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [showFollowup, setShowFollowup] = useState(false);
  const [showFollowup2, setShowFollowup2] = useState(false);
  const [showFollowup3, setShowFollowup3] = useState(false);
  const [showFollowup4, setShowFollowup4] = useState(false);
  const [followup1Response, setFollowup1Response] = useState("");
  const [followup2Response, setFollowup2Response] = useState("");
  const [followup3Response, setFollowup3Response] = useState("");
  const [followup4Response, setFollowup4Response] = useState("");
  const [answeredFollowup4, setAnsweredFollowup4] = useState(false);
  const [loading, setLoading] = useState(false);

  const simulateTyping = () => {
    const delay = 20; // milliseconds
    const response = question;
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedResponse(
        (prevTypedResponse) => prevTypedResponse + response[currentIndex]
      );
      currentIndex++;
      if (currentIndex === response.length) {
        clearInterval(intervalId);
        setShowButtons(true);
      }
    }, delay);
  };

  // Start simulating typing on component mount
  useState(() => {
    simulateTyping();
  }, []);

  const handleFollowup1InputChange = (event) => {
    setFollowup1Response(event.target.value);
  };

  const handleFollowup1KeyPress = (event) => {
    if (event.key === "Enter") {
      setShowFollowup2(true);
    }
  };

  const handleFollowup2InputChange = (event) => {
    setFollowup2Response(event.target.value);
  };

  const handleFollowup2KeyPress = (event) => {
    if (event.key === "Enter") {
      setShowFollowup3(true);
    }
  };

  const handleFollowup3InputChange = (event) => {
    setFollowup3Response(event.target.value);
  };

  const handleFollowup3KeyPress = (event) => {
    if (event.key === "Enter") {
      setShowFollowup4(true);
    }
  };

  const handleFollowup4InputChange = (event) => {
    setFollowup4Response(event.target.value);
  };

  const handleFollowup4KeyPress = (event) => {
    if (event.key === "Enter") {
      setAnsweredFollowup4(true);
      console.log("answeredFollowup4:", answeredFollowup4);
    }
  };

  // Use useEffect to listen for changes in answeredFollowup4 state
  useEffect(() => {
    if (answeredFollowup4) {
      // Show LoadingPage for 2000ms
      console.log("useEffect triggered");
      setPage("loading");
      console.log("page:", page);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setPage("customerProfile");
      }, 2000);
    }
  }, [answeredFollowup4]);

  let content;
  if (page === "confirmation") {
    content = (
      <div className="ConfirmationPage">
        <div className="response1">
          <h1>{typedResponse}</h1>
        </div>
        {showButtons && (
          <div className="buttons">
            <button
              className="no-button"
              onClick={() => setShowFollowup(false)}
            >
              {noLabel}
            </button>
            <button
              className="yes-button"
              onClick={() => setShowFollowup(true)}
            >
              {yesLabel}
            </button>
          </div>
        )}
        {showFollowup && (
          <div className="followup">
            <h2>
              Tell me more about the structure of your team. Do you have a CPO
              or Head of Product?
            </h2>
            <textarea
              placeholder="Start typing.."
              value={followup1Response}
              onChange={handleFollowup1InputChange}
              onKeyPress={handleFollowup1KeyPress}
            />
          </div>
        )}
        {showFollowup2 && (
          <div className="followup2">
            <h2>
              I see. And when did you first start noticing communication issues
              in the team?
            </h2>
            <textarea
              placeholder="Start typing.."
              value={followup2Response}
              onChange={handleFollowup2InputChange}
              onKeyPress={handleFollowup2KeyPress}
            />
          </div>
        )}
        {showFollowup3 && (
          <div className="followup3">
            <h2>
              What have you done so far to try to address the issues? Have you
              considered bringing a mentor or coach on board to support your
              CPO?
            </h2>
            <textarea
              placeholder="Start typing.."
              value={followup3Response}
              onChange={handleFollowup3InputChange}
              onKeyPress={handleFollowup3KeyPress}
            />
          </div>
        )}
        {showFollowup4 && (
          <div className="followup4">
            <h2>
              This is all very helpful, thanks. Is there anything else you'd
              like to share about your team or the issues you're facing?
            </h2>
            <textarea
              placeholder="Start typing.."
              value={followup4Response}
              onChange={handleFollowup4InputChange}
              onKeyPress={handleFollowup4KeyPress}
            />
          </div>
        )}
      </div>
    );
  } else if (page === "loading") {
    // Render the LoadingPage
    content = <LoadingPage />;
  } else if (page === "customerProfile") {
    // Render the CustomerProfile
    content = <CustomerProfilePage />;
  }

  return (
    <div>
      {/* Render the content */}
      {content}
    </div>
  );
}

export default ConfirmationPage;
