import { useState } from "react"
import Event from "./component/event"
import ValidationSample from "./component/ValidationSample"
import IterationSample from "./component/iterationSample"
import LifeCycleSample from "./component/lifeCycle"



function App() {

  return (
  <>
    <Event />
    <h1>Validation Sample</h1>
    <ValidationSample/>
    <h2>Iteration</h2>
    <IterationSample/>
    <h3>LifeCycle</h3>
    <LifeCycleSample color="blue" />
  </>
  )
}

export default App
