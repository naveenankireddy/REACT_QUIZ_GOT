import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import QuestionsList from "./Questions";
import drakarys from "./images/drakarys.gif";
import tyrion from "./images/tyrion3.gif";
import tyrionOne from "./images/tyrion1.gif";
import johnSnow from "./images/snow1.gif";
// import soundTrack from './soundTrack/Opening_Credits___Game_of_Thrones___Season_8__HBO_(256k).mp3'
// import Player from "./Components/Player";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  console.log(QuestionsList, "hiii naveen this is data");

  function handleCorrectAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  }

  function handleNextQuestion() {
    setClicked(false);
    if (currentQuestion < QuestionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  }
  return (
    <div>

{/* <span><Player /></span> */}

<div className="App">
      {showScore ? (
        <div className="container completed">
          <h2>Completed ^|^</h2>
          <h3>
            {score}/ {QuestionsList.length}
            
          </h3>
          <img
            src={
              score === 0
                ? drakarys
                : score > 0 && score < QuestionsList.length / 2
                ? tyrionOne
                : score > QuestionsList.length / 2 &&
                  score < QuestionsList.length
                ? johnSnow
                : score === QuestionsList.length
                ? tyrion
                : undefined
            }
            alt="Love you Dany"
          />
        </div>
      ) : (
        <div className="container">
          
          <div className="questions_lenth">
            <h3>
              Question {currentQuestion + 1} of {QuestionsList.length}
            </h3>
          </div>
          <div>
            <div className="question">
              <h4>{QuestionsList[currentQuestion].question}</h4>
            </div>
            <div className="grid_list">
              {QuestionsList[currentQuestion].answersList.map((option) => {
                return (
                  <li key={uuidv4()}>
                    <button
                      disabled={clicked}
                      className={clicked && option.isCorrect ? "correct" : ""}
                      onClick={() => handleCorrectAnswer(option.isCorrect)}
                    >
                      {option.answer}
                    </button>
                  </li>
                );
              })}
            </div>
            <div>
              <div class="wrapper">
                <div class="link_wrapper">
                  <button
                    className="next_btn"
                    onClick={handleNextQuestion}
                    disabled={!clicked}
                  >
                    Next
                  </button>
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 268.832 268.832"
                    >
                      <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="next_btn">Next</button> */}
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
}

export default App;
