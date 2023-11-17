import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [color , setColor] = useState('white');

  const handleClick = (value) => {
    setColor(value)
  }

  return (
   <div className="container-fluid m-0 p-2 text-center d-flex flex-column w-100 h-100 justify-content-between" style={{background : color}}>
    <h1>BG Changer</h1>
    <div className="button rounded-pill d-flex justify-content-around p-2 m-5 float-end bg-primary">
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('black')}>Black</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('blue')}>Blue</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('red')}>Red</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('purple')}>Purple</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('green')}>Green</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('violet')}>Violet</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('white')}>White</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('olive')}>Olive</button>
      <button type='button' className='btn m-2 bg-light' onClick={() => handleClick('aqua')}>Aqua</button>
    </div>
   </div>
  )
}

export default App
