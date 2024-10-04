import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondPage from "./SecondPage";

export default function FirstPage() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mob, setMob] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && pass && mob) {
      // Navigate to SecondPage
      navigate("/SecondPage");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Mob. No.</label>
          <input
            type="tel"
            id="number"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
