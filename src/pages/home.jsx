import { useState, useCallback, useEffect, useRef } from 'react'

function Home() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyPasswordOnClipboard = () => {
    navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6">🔐 Password Generator</h1>

        <div className="flex rounded-xl overflow-hidden mb-5 bg-black/30">
          <input
            ref={passwordRef}
            value={password}
            readOnly
            className="w-full bg-transparent px-4 py-3 text-lg focus:outline-none"
          />
          <button
            onClick={copyPasswordOnClipboard}
            className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <div className="flex justify-between mb-1">
              <span>Length</span>
              <span className="font-bold">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-fuchsia-500"
            />
          </div>

          <div className="flex justify-between">
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(p => !p)}
              />
              Numbers
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed(p => !p)}
              />
              Symbols
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 font-bold"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
