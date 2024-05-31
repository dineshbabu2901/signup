import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import "./Fan.css";
import "./Signin.css";


const Fan = () => {
  return (
    <div className=" signin-container">
      <h1>Welcome to the Anime Fan Club Meeting!</h1>
      <p>We are excited to have you join us for our next meeting.</p>
      <div className="meeting-details">
        <h2>Meeting Details</h2>
        <p>Date: January 1, 2025</p>
        <p>Time: 6:00 PM</p>
        <p>Location: Virtual Meeting (Zoom link will be provided)</p>
      </div>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Stay tuned for upcoming events and activities!</p>
      </div>
      <div className="join-us">
        <h2>Join Us</h2>
        <p>
          If you're not already a member, join our club to participate in our
          meetings and events.
        </p>
        <Link to="/Join">
          <div>
            <button>Join Now</button>
          </div>
        </Link>
      </div>
      <div className="note-icon-container">
        <Link to="/Note">
          <FontAwesomeIcon icon={faStickyNote} className="note-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Fan;
