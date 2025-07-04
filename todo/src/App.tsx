import { useState } from "react"
import Event from "./component/event"
import ValidationSample from "./component/ValidationSample"
import IterationSample from "./component/iterationSample"



function App() {

  return (
  <>
    <Event />
    <h1>Validation Sample</h1>
    <ValidationSample/>
    <h2>Iteration</h2>
    <IterationSample/>
  </>
  )
}

export default App
