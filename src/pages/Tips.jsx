function Tips() {
  return (
    <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 space-y-4">
      <h1 className="text-3xl font-extrabold text-center">Security Tips</h1>
      <ul className="list-disc list-inside text-white/80 space-y-2">
        <li>Use passwords longer than 12 characters</li>
        <li>Include numbers and symbols</li>
        <li>Never reuse passwords</li>
        <li>Use a password manager</li>
      </ul>
    </div>
  )
}

export default Tips
