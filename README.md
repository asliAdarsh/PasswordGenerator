🔐 Password Generator (React + Vite)

A simple, fast, and customizable Password Generator built using React and Vite.
This app allows users to generate secure passwords with adjustable length and advanced character options.

🚀 Features

Generate secure, random passwords

Customize password length

Toggle uppercase, lowercase, numbers, and symbols

Copy password to clipboard

Fast development experience powered by Vite

Responsive UI

Available as a Docker image for quick deployment

🛠️ Tech Stack

React (Frontend UI)

Vite (Lightning-fast development & build tool)

CSS / Tailwind / Custom styles (depending on your implementation)

📦 Installation & Setup (Local)
1. Clone the repository
git clone <your-repo-url>
cd password-generator

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Build for production
npm run build

🐳 Run with Docker (Public Image)

You can run this app instantly using the public image from Docker Hub:

docker run -d --name password-generator -p 5173:5173 asliadarsh/passwordgenerator

You can check some more docker images tags from https://hub.docker.com/repository/docker/asliadarsh/passwordgenerator 

After running the command, open:

👉 http://localhost:5173

to access the application.

📁 Project Structure
├── src
│   ├── components
│   ├── App.jsx
│   ├── main.jsx
│   └── styles
├── public
├── index.html
├── package.json
└── vite.config.js

🤝 Contributing

Feel free to fork this repo and submit pull requests.
Issues and feature requests are welcome!

📄 License

This project is licensed under the MIT License — free to use and modify.
