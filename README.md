# WeatherApp_React_nodejs
weather app amde using react and nodejs

#Steps to install on system 
fork / clone to your computer      
   
step1)go to server and in terminal "npm i"|| "npm install" make sure you have installed Nodejs   

Step 2): similarly go to frontend in terminal type "npm i"|| "npm install"   
   
Step 3) go to OpenWeather.com generate Api

Step4) go to Server and make file name .env and type API_KEY=pasteyour api key PORT=5000 without " " or ; ,

Step 5) go to frontend /src/components/form.jsx "replace const response = await axios.get(`https://weatherbackend-lhvv.onrender.com/?city=${cityName}`); with "const response = await axios.get(`localhost:5000/?
city=${cityName}`);"

step 6) to start Server in ternminal type "node index.js " or nodemon index.js and to start Front End Server in terminal of frontend type npm start
