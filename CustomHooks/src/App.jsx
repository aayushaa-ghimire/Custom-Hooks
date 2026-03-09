import './App.css'
import useToggle from 'C:/React/CustomHooks/CustomHooks/src/UseToggle.jsx'
function App() {

  const[value, toggleValue] = useToggle(true)
  console.log("Val----", value)
  return (
    <>
    <div> 
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=> toggleValue(false)}>Hide Heading</button>
      <button onClick={()=> toggleValue(true)}>Show Heading</button>
      {/* <h1>This is Costom Hook</h1> */}

      {
        value? <h1>Custom Hooks in React</h1>:null
      }
    </div>
    </>
  )
}

export default App
