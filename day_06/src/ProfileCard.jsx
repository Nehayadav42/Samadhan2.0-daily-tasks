import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, role, img, description }) {
  return (
    <div className="profile-card">
      <img src={img} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
      <div className="buttons">
        <button className="connect-btn">Connect</button>
        <button className="msg-btn">Message</button>
      </div>
    </div>
  );
}

export default ProfileCard;
