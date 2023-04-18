import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import "./RecommendationPage.css";
import woman_cosAnimationData from "./lotties/woman_cos";
import workshopAnimationData from "./lotties/workshop.json";
import helpgrowAnimationData from "./lotties/helpgrow.json";
import LoadingPage from "./LoadingPage";
import TalentList from "./TalentList";

function RecommendationPage() {
  const [page, setPage] = useState("recommendation");
  const [loading, setLoading] = useState(false);
  const womanCosAnimationContainer = useRef(null);
  const workshopAnimationContainer = useRef(null);
  const helpgrowAnimationContainer = useRef(null);

  useEffect(() => {
    console.log("useEffect2 triggered");
    // Load woman_cos animation
    lottie.loadAnimation({
      container: womanCosAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: woman_cosAnimationData
    });

    // Load img2 animation
    lottie.loadAnimation({
      container: workshopAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: workshopAnimationData
    });

    // Load img3 animation
    lottie.loadAnimation({
      container: helpgrowAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: helpgrowAnimationData
    });
  }, []);

  // Handle onClick action
  const handleOnClick = () => {
    // Show LoadingPage for 200ms
    setPage("loading");
    console.log("setPage loading");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage("talent"); // Update page state to TalentList
    }, 2000);
  };

  let content;
  if (page === "recommendation") {
    content = (
      <div>
        <h1>
          Based on the information you provided, here are a few options for ACME
        </h1>
        <div className="rec_container">
          <div className="recommendation-section">
            <div className="recommendation-image">
              <div className="womanimg" ref={womanCosAnimationContainer} />
            </div>
            <div className="recommendation-content" onClick={handleOnClick}>
              <h3>Full-time Chief of Staff</h3>
              <p>
                Having a Chief of Staff to support your Head of Product can make
                a significant impact on integrating different stakeholders into
                product development decisions. Our expert search process can
                find you a top-notch Chief of Staff who can provide
                on-the-ground insights on the root causes of communication
                breakdowns, and help your CPO establish effective communication
                processes across teams. With their experience in similar roles,
                they can offer valuable expertise in improving cross-team
                collaboration and ensuring that sales and marketing are not left
                out of the product development loop.
              </p>
            </div>
          </div>
          <div className="recommendation-section">
            <div className="recommendation-image">
              <div className="workshop" ref={workshopAnimationContainer} />
            </div>
            <div className="recommendation-content" onClick={handleOnClick}>
              <h3>Consulting project</h3>
              <p>
                An expert can work with your team to develop tools and processes
                that will enhance cross-team communication and product team
                efficiency. From creating a communications playbook to
                conducting workshops with senior leadership, we can connect you
                to a consultant that can provide tailored solutions to address
                the communication challenges you’re facing.
              </p>
            </div>
          </div>
          <div className="recommendation-section">
            <div className="recommendation-image">
              <div className="helpgrow" ref={helpgrowAnimationContainer} />
            </div>
            <div className="recommendation-content" onClick={handleOnClick}>
              <h3>Advisor for your Head of Product</h3>
              <p>
                Since you mentioned your Head of Product is new in the role, we
                can help connect him to a mentor/advisor who has overseen
                product development for consumer social apps. They can offer
                valuable insights and tips based on their own experiences in
                managing product teams in fast-growing organizations with
                multiple stakeholders. Their deep industry knowledge and
                expertise can help your CPO level up their skills and
                successfully navigate the challenges of product development in
                your unique environment.
              </p>
            </div>
          </div>
          <h2>Please select an option above to proceed</h2>
        </div>
      </div>
    );
  } else if (page === "loading") {
    // Render the LoadingPage
    content = <LoadingPage />;
  } else if (page === "talent") {
    // Render the TalentList page
    content = <TalentList />;
  }
  return (
    <div>
      {/* Render the content */}
      {content}
    </div>
  );
}

export default RecommendationPage;
