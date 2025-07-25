# WEATHER APP PROJECT

=> INSTALLATION
1. npm create vite@latest weather
2. tailwindcss installation
3. packages required: axios, react-toastify
    npm i axios react-toastify

=> MAKING
1. Components
    - NavBar
    - Clock.jsx -> useState and useEffect
2. Assets
    - Iconfinder

=> Dynamic
1. API
    -OpenWeather Key - 1f1433cdbbd15597af571b666b08bc0c
2. Import react-toastify to App.jsx

# Hosting on gh-pages
1. vite.config.js
    - base: "/<directory-name>"
2. package.json
    - "homepage": "https://amannagar04.github.io/<directory-name>/",
3. Terminal
    - npm install gh-pages
4. package.json
    - scripts
      - "predeploy": "npm run build",
      - "deploy": "gh-pages -d dist"
5. git push origin main
6. npm run deploy