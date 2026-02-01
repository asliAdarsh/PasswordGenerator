function About() {
  return (
    <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 space-y-6 text-center">
      
      <h1 className="text-3xl font-extrabold">
        About This App
      </h1>

      <p className="text-white/80 text-sm leading-relaxed">
        A modern password generator built with <span className="font-semibold">React</span>, 
        <span className="font-semibold"> Vite</span>, 
        <span className="font-semibold"> Tailwind CSS</span>, and Docker.
      </p>

      {/* Divider */}
      <div className="h-px bg-white/20" />

      {/* Author Section */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold">👋 About Me</h2>

        <p className="text-white/70 text-sm">
          Built and maintained by <span className="font-semibold">Adarsh</span>
        </p>

        <div className="flex flex-col gap-3 text-sm">
          
          <a
            href="https://github.com/asliadarsh"
            target="_blank"
            rel="noreferrer"
            className="bg-black/30 hover:bg-black/40 transition rounded-lg px-4 py-2"
          >
            🧑‍💻 GitHub Profile
            <div className="text-white/50 text-xs">
              github.com/asliadarsh
            </div>
          </a>

          <a
            href="https://github.com/asliAdarsh/PasswordGenerator"
            target="_blank"
            rel="noreferrer"
            className="bg-black/30 hover:bg-black/40 transition rounded-lg px-4 py-2"
          >
            💻 App GitHub Repository
            <div className="text-white/50 text-xs">
              PasswordGenerator
            </div>
          </a>

          <a
            href="https://hub.docker.com/repository/docker/asliadarsh/passwordgenerator"
            target="_blank"
            rel="noreferrer"
            className="bg-black/30 hover:bg-black/40 transition rounded-lg px-4 py-2"
          >
            📦 Docker Hub Repository
            <div className="text-white/50 text-xs">
              asliadarsh/passwordgenerator
            </div>
          </a>

        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-white/40 pt-2">
        © {new Date().getFullYear()} Adarsh • Built with ❤️
      </p>
    </div>
  )
}

export default About
