import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import RecommendationPage from "./RecommendationPage";
import "./CustomerProfilePage.css";

function CustomerProfilePage() {
  const [page, setPage] = useState("customerProfile");
  const [typedResponse, setTypedResponse] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [showProfileQ1, setShowProfileQ1] = useState(false);
  const [showProfileQ2, setShowProfileQ2] = useState(false);
  const [showProfileQ3, setShowProfileQ3] = useState(false);
  const [showProfileQ4, setShowProfileQ4] = useState(false);
  const [showProfileQ5, setShowProfileQ5] = useState(false);
  const [showProfileQ6, setShowProfileQ6] = useState(false);
  const [showProfileQ7, setShowProfileQ7] = useState(false);
  const [answeredAll, setAnsweredAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditModeQ1, setIsEditModeQ1] = useState(true);
  const [isEditModeQ2, setIsEditModeQ2] = useState(true);
  const [isEditModeQ3, setIsEditModeQ3] = useState(true);
  const [isEditModeQ4, setIsEditModeQ4] = useState(true);
  const [isEditModeQ5, setIsEditModeQ5] = useState(true);
  const [isEditModeQ6, setIsEditModeQ6] = useState(true);
  const [isEditModeQ7, setIsEditModeQ7] = useState(true);
  const [showEditButton1, setShowEditButton1] = useState(false);
  const [showEditButton2, setShowEditButton2] = useState(false);
  const [showEditButton3, setShowEditButton3] = useState(false);
  const [showEditButton4, setShowEditButton4] = useState(false);
  const [showEditButton5, setShowEditButton5] = useState(false);
  const [showEditButton6, setShowEditButton6] = useState(false);
  const [showEditButton7, setShowEditButton7] = useState(false);

  const simulateTyping = () => {
    const delay = 20; // milliseconds
    const response = prompt;
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedResponse(
        (prevTypedResponse) => prevTypedResponse + response[currentIndex]
      );
      currentIndex++;
      if (currentIndex === response.length) {
        clearInterval(intervalId);
        setShowProfileQ1(true);
      }
    }, delay);
  };

  prompt = "Tell us more about you and your company";

  // Start simulating typing on component mount
  useState(() => {
    simulateTyping();
  }, []);

  const handleProfileQKeyPress = (event, currentProfileQ, nextProfileQ) => {
    if (event.key === "Enter") {
      switch (currentProfileQ) {
        case "ProfileQ1":
          setShowProfileQ2(true);
          setIsEditModeQ1(false);
          setShowEditButton1(true);
          break;
        case "ProfileQ2":
          setShowProfileQ3(true);
          setIsEditModeQ2(false);
          setShowEditButton2(true);
          break;
        case "ProfileQ3":
          setShowProfileQ4(true);
          setIsEditModeQ3(false);
          setShowEditButton3(true);
          break;
        case "ProfileQ4":
          setShowProfileQ5(true);
          setIsEditModeQ4(false);
          setShowEditButton4(true);
          break;
        case "ProfileQ5":
          setShowProfileQ6(true);
          setIsEditModeQ5(false);
          setShowEditButton5(true);
          break;
        case "ProfileQ6":
          setShowProfileQ7(true);
          setIsEditModeQ6(false);
          setShowEditButton6(true);
          break;
        case "ProfileQ7":
          setShowSubmit(true);
          setIsEditModeQ7(false);
          setShowEditButton7(true);
          break;
        default:
          break;
      }
    }
  };

  const handleAnsweredAll = () => {
    setAnsweredAll(true);
  };

  const handleEditClick = (currentProfileQ, setIsEditMode) => {
    switch (currentProfileQ) {
      case "ProfileQ1":
        setIsEditModeQ1(true);
        setShowEditButton1(false);
        break;
      case "ProfileQ2":
        setIsEditModeQ2(true);
        setShowEditButton2(false);
        break;
      case "ProfileQ3":
        setIsEditModeQ3(true);
        setShowEditButton3(false);
        break;
      case "ProfileQ4":
        setIsEditModeQ4(true);
        setShowEditButton4(false);
        break;
      case "ProfileQ5":
        setIsEditModeQ5(true);
        setShowEditButton5(false);
        break;
      case "ProfileQ6":
        setIsEditModeQ6(true);
        setShowEditButton6(false);
        break;
      case "ProfileQ7":
        setIsEditModeQ7(true);
        setShowEditButton7(false);
        break;
    }
  };

  // Use useEffect to listen for changes in answeredAll state
  useEffect(() => {
    if (answeredAll) {
      // Show LoadingPage for 2000ms
      console.log("useEffect triggered");
      setPage("loading");
      console.log("page:", page);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setPage("recommendation");
      }, 2000);
    }
  }, [answeredAll]);

  // set readOnly attribute based on isEditMode

  let content;
  if (page === "customerProfile") {
    content = (
      <div>
        <div>
          <h1>{typedResponse}</h1>
        </div>
        {showProfileQ1 && (
          <div className="Question1">
            {" "}
            <h2>Your name</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ1", "ProfileQ2")
              }
              readOnly={!isEditModeQ1}
            />
            {showEditButton1 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ1", setIsEditModeQ1)}
              />
            )}{" "}
          </div>
        )}
        {showProfileQ2 && (
          <div className="Question2">
            {" "}
            <h2>Your title</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ2", "ProfileQ3")
              }
              readOnly={!isEditModeQ2}
            />{" "}
            {showEditButton2 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ2", setIsEditModeQ2)}
              />
            )}{" "}
          </div>
        )}
        {showProfileQ3 && (
          <div className="Question3">
            {" "}
            <h2>Your company name</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ3", "ProfileQ4")
              }
              readOnly={!isEditModeQ3}
            />{" "}
            {showEditButton3 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ3", setIsEditModeQ3)}
              />
            )}{" "}
          </div>
        )}
        {showProfileQ4 && (
          <div className="Question4">
            {" "}
            <h2>What type of company is it?</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ4", "ProfileQ5")
              }
              readOnly={!isEditModeQ4}
            />{" "}
            {showEditButton4 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ4", setIsEditModeQ4)}
              />
            )}
          </div>
        )}
        {showProfileQ5 && (
          <div className="Question5">
            {" "}
            <h2>Roughly how many employees does the company have?</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ5", "ProfileQ6")
              }
              readOnly={!isEditModeQ5}
            />{" "}
            {showEditButton5 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ5", setIsEditModeQ5)}
              />
            )}
          </div>
        )}
        {showProfileQ6 && (
          <div className="Question6">
            {" "}
            <h2>Where is the company headquartered?</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ6", "ProfileQ7")
              }
              readOnly={!isEditModeQ6}
            />{" "}
            {showEditButton6 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ6", setIsEditModeQ6)}
              />
            )}
          </div>
        )}
        {showProfileQ7 && (
          <div className="Question7">
            {" "}
            <h2>In which other regions does it operate?</h2>
            <input
              type="text"
              onKeyPress={(e) =>
                handleProfileQKeyPress(e, "ProfileQ7", "Submit")
              }
              readOnly={!isEditModeQ7}
            />{" "}
            {showEditButton7 && (
              <input
                type="button"
                value="edit"
                onClick={() => handleEditClick("ProfileQ7", setIsEditModeQ7)}
              />
            )}{" "}
          </div>
        )}
        {showSubmit && (
          <div>
            {" "}
            <input
              type="submit"
              className="submit"
              value="Submit"
              onClick={handleAnsweredAll}
            ></input>{" "}
          </div>
        )}
      </div>
    );
  } else if (page === "loading") {
    // Render the LoadingPage
    content = <LoadingPage />;
  } else if (page === "recommendation") {
    // Render the RecommendationPage
    content = <RecommendationPage />;
  }

  return (
    <div>
      {/* Render the content */}
      {content}
    </div>
  );
}

export default CustomerProfilePage;
