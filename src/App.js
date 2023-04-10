import React, { useState } from "react";
import "./App.css";
import { EnhanceAI } from "enhanceai";
import LoadingPage from "./LoadingPage";
import ConfirmationPage from "./ConfirmationPage";
import CustomerProfilePage from "./CustomerProfilePage";

const logo = "logo.png";

function InputPage({ onSubmit }) {
  const [problem, setProblem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(problem);
  };

  return (
    <div className="container">
      <header>
        <h1 className="header">
          Hello! What problem can we help you solve today?
        </h1>
      </header>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <EnhanceAI
            context={
              "The user is a startup professional who is looking for help answering specific problems relevant to their business"
            }
            className="EnhanceAI"
          >
            <textarea
              name="problem"
              type="text"
              className="input"
              rows="4"
              cols="50"
              placeholder="Start typing.."
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />
          </EnhanceAI>
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("input");
  const [showLoading, setShowLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);

  const handleSubmit = (problem) => {
    setPage("loading");
    setShowLoading(true);

    // simulate a 2000ms delay
    setTimeout(() => {
      setShowLoading(false);
      setPage("confirmation");
      setShowConfirmation(true);
    }, 2000);
  };

  const handleConfirmation = () => {
    setPage("input");
    setShowConfirmation(false);
  };

  let pageContent;

  if (page === "input") {
    pageContent = <InputPage onSubmit={handleSubmit} />;
  } else if (page === "loading") {
    pageContent = <LoadingPage />;
  } else if (page === "confirmation") {
    pageContent = (
      <ConfirmationPage
        question="Our understanding: You are having issues with the way your product team communicates. Is that correct?"
        yesLabel="Yes"
        noLabel="No"
        onYes=""
        onNo={() => {
          setPage("input");
        }}
      />
    );
  } else if (page === "customerProfile") {
    pageContent = <CustomerProfilePage />;
  }

  return (
    <div>
      <img
        className="logo"
        src="
          https://assets.ycodeapp.com/assets/app15226/Images/5qerQ8pdzEZWWZUaeJVHha7ZbtXg6Gr85yHSc4s5-published.png"
        alt="Logo"
      />

      {pageContent}
    </div>
  );
}

export default App;
