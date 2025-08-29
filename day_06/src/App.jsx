import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css"; // Import CSS file

function App() {
  return (
    <div className="app">
      <h1>🌟 Profile Card Showcase 🌟</h1>

      <div className="card-container">
        <ProfileCard
          name="Eliza Markove"
          role="Frontend Developer"
          img="https://images.unsplash.com/photo-1662457966441-658644d86ba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Passionate about building modern, responsive, and interactive web apps."
        />
        <ProfileCard
          name="Aarav Sharma"
          role="Backend Developer"
          img="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Loves working with Node.js, Express, and MongoDB."
        />
        <ProfileCard
          name="Michael Anderson"
          role="UI/UX Designer"
          img="https://images.unsplash.com/photo-1629185751266-7c283272ba15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Designing seamless user experiences with creativity and precision."
        />
         <ProfileCard
          name="Sophia Williams"
          role="UI/UX Designer"
          img="https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Loves designing seamless user experiences with creativity and precision."
        />
      </div>
    </div>
  );
}

export default App;
