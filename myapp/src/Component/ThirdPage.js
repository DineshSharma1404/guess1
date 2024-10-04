import React from "react";
import { useLocation } from "react-router-dom";

export default function ThirdPage() {
  const { state } = useLocation(); // Get the state from navigation
  const movieName = state?.movieName;
  const guessedCorrectly = state?.guessedCorrectly;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Movie Guessing Game!</h1>
      {guessedCorrectly ? (
        <>
          <h2>Congratulations!</h2>
          <p>
            You guessed the movie: <strong>{movieName}</strong>
          </p>
          <div>
            <span style={{ color: "gold" }}>★ ★ ★ ★ ★</span>
          </div>
        </>
      ) : (
        <h2>Oops! Better luck next time!</h2>
      )}
    </div>
  );
}
