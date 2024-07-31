import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/userInput";
import Results from "./components/results";

function App() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && <p>please enter valid year</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
