import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [characterAllowed, setCharacterAllowed] = useState(false)
const [password, setPassword] = useState('')

const passwordRef = useRef(null)

const generatePassword = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) {str += "0123456789"}
  if (characterAllowed) {str += "!@#$%^&*()_+" } 
  
  for (let i = 0; i < length; i++) {
const char = (Math.floor(Math.random() * str.length))
pass += str.charAt(char)
  }
  setPassword(pass)
}, [length, numberAllowed, characterAllowed])

useEffect(() => {generatePassword()},[length, numberAllowed, characterAllowed])
const copyPasswordOnClickboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}

  return (
    <div className='bg-red-800 min-h-screen flex items-center'>
      <div className='mx-auto  mt-10 mb-auto shadow-lg rounded-lg px-8 py-3 bg-yellow-700 text-orange-500'>
        <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-800'>
          <input 
          type="text"
          value={password}
          className='outline-none bg-white w-full py-1 px-3 text-gray-800'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          onClick={copyPasswordOnClickboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex itmes-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex itmes-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           onChange={()=>{
            setNumberAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="number">Numbers</label>
           </div>
          <div className='flex itmes-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={characterAllowed}
           onChange={()=>{
            setCharacterAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="charcInput">Charchters</label>
           </div>
        </div>
      </div>
    </div>
  )
}

export default App
