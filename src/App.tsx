import { useState } from 'react'
import './App.css'

function App() {
  const [button, setButton] = useState('')
  const handleForgive = () => {
    setButton('maafkan saya');
  };

  const handleNotForgive = () => {
    setButton('ngapain, males ah');
  };


  return (
    <>
      <div className='pt-20'>
        <h1 className='text-5xl text-bold font-sans uppercase'>
          Minal Aidzin Wal Faidzin
        </h1>
        <h1 className='text-3xl text-bold uppercase pt-10'>Mohon Maaf Lahir Batin</h1>
      </div>
      <div className='pt-40 text-5xl'>
        <h1>
          {button}
        </h1>
      </div>
      <div className='pt-40'>
        <button onClick={handleForgive} className='text-3xl bg-green-300 px-2 py-2 border rounded border-black m-5'>
          Maafkan Saya
        </button>
        <button onClick={handleNotForgive} className='text-3xl bg-red-300 px-2 py-2 border rounded border-black'>
          Tidak Maafkan
        </button>
      </div>
    </>
  )
}

export default App
