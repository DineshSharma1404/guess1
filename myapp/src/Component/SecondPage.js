import React, { useState } from "react";
import data from "./data.js"; // Ensure the path is correct based on your folder structure
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [hintIndex, setHintIndex] = useState(1);
  const [guess, setGuess] = useState("");

  const navigate = useNavigate(); // Correctly set up the navigate hook

  // Function to start a new game
  const startGame = () => {
    const randomMovie = data[Math.floor(Math.random() * data.length)];
    setCurrentMovie(randomMovie);
    setHintIndex(1);
    setGuess("");
  };

  // Function to handle user's guess submission
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === currentMovie.movie.toLowerCase()) {
      toast.success("Congratulations! You guessed the movie correctly!");
      navigate("/ThirdPage", {
        state: { movieName: currentMovie.movie, guessedCorrectly: true },
      });
      startGame(); // Start a new game after navigating
    } else if (hintIndex < 5) {
      setHintIndex(hintIndex + 1); // Reveal the next hint
      toast.info("Incorrect guess. Try again with the next hint.");
    } else {
      toast.error(`Sorry! The correct answer was '${currentMovie.movie}'.`);
      navigate("/ThirdPage", {
        state: { movieName: currentMovie.movie, guessedCorrectly: false },
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Guessing Game</h1>
      {currentMovie ? (
        <>
          <p>{currentMovie[`Hint ${hintIndex}`]}</p>
          <form onSubmit={handleGuessSubmit}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Guess the movie"
              required
            />
            <button type="submit">Submit Guess</button>
          </form>
        </>
      ) : (
        <button onClick={startGame}>Start Game</button>
      )}
      <ToastContainer /> {/* Include the ToastContainer to render toasts */}
    </div>
  );
}
