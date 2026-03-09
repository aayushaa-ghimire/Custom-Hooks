import './App.css'
import useToggle from './UseToggle.jsx'
function App() {

  const[value, toggleValue] = useToggle(true)
  console.log("Val----", value)
  return (
    <>
      <div className='container'> 
        <div className='cTop'>
          <button 
            onClick={toggleValue}
            className='btn'>
            Toggle Heading
          </button>

          <button 
            onClick={()=> toggleValue(false)}
            className='btn'>
            Hide Heading
          </button>

          <button 
            onClick={()=> toggleValue(true)}
            className='btn'>
            Show Heading
          </button>
          </div>    

          <div className='cBottom'>
          {
            value? <h1>Custom Hooks in React</h1>:null
          }
          </div>

          <button className='btnLast'>
            Click here
          </button>
        </div>
    </>
  )
}

export default App
