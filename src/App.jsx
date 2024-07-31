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
      <Results userInput={userInput} />
    </>
  );
}

export default App;
