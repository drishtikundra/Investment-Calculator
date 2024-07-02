import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput]=useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [inputIdentifier]:+newValue
        }
    })
}

const inputIsValid=userInput.duration>=1;


  return (
    // <h1>My Investment Calculator</h1>
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p>Please enter duration more than 0</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
