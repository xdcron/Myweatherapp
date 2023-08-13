
const searchInput = document.querySelector('.search');
const celcius = document.querySelector('.celcius');
const farenheit = document.querySelector('.farenheit');
const infoDisplay = document.querySelector('.info');
const locationArea= document.querySelector('.location');
const date = document.querySelector('.date');
const condition = document.querySelector('.condition');
const image = document.querySelector('.image')
const temperature = document.querySelector('.temp');
const feelsLike = document.querySelector('.real-temp');
const humidity = document.querySelector('.humid');
const windSpeed = document.querySelector('.wind-speed');
const pressure = document.querySelector('.pressure');
const infoContainer = document.querySelector('.info');
const errorContainer = document.querySelector('.error');
const val = document.querySelector('.c-f');

let dCelcius = 0;
let realTempC = 0;
let realTempF = 0;
let dFarenheit = 0;


function err() {
  infoContainer.classList.add('hidden')
  errorContainer.classList.remove('hidden')
  val.classList.add('hidden')
};

searchInput.value = '';

// FETCH X THEN

// function getWeather() {
 
   
//     .then(res => {
//             if(!res.ok) throw new Error(err);
//             return res.json();
//     }).then(data => {
//       const  {current, location} = data;
//       const now = new Date(location.localtime);
//        const day = `${weekday[now.getDay() - 1]}`;
//        const months = `${month[now.getMonth()]}`;
//        const dates = `${now.getDate()}`;
//        const year = `${now.getFullYear()}`;
//        const hour = `${now.getHours()}`.padStart(2, 0);
//        const minute = `${now.getMinutes()}`.padStart(2, 0);

//        dCelcius = current.temp_c;
//        dFarenheit = current.temp_f;
//        realTempC = current.feelslike_c;
//        realTempF = current.feelslike_f;

//        // Show weather data
//     locationArea.textContent = `${location.name}, ${location.country}`;
//     date.textContent = `${day},${months}  ${dates}, ${year} at ${hour}:${minute}`;
//     condition.textContent = current.condition.text;
//     console.log(current.condition.icon);
//       image.src = current.condition.icon;
//       temperature.textContent = `${current.temp_c}°`;
//       feelsLike.textContent = `${current.feelslike_c}°`;
//       humidity.textContent = `${current.humidity}%`;
//       windSpeed.textContent = `${current.wind_kph} kph`;
//       pressure.textContent = `${current.pressure_mb} hPa`;

//       if(farenheit.classList.contains('active')){
//         temperature.textContent = `${current.temp_f}°`;
//       feelsLike.textContent = `${current.feelslike_f}°`;
//       }

//       // Display container
//       val.classList.remove('hidden')
//       infoContainer.classList.remove('hidden');
//       errorContainer.classList.add('hidden')
//     }).catch(() => err())
// }

// window.addEventListener('keydown', (e) => {
//   if(e.key !== 'Enter') return
//   getWeather();
//   searchInput.value = '';
// })

// celcius.addEventListener('click', ()=>{
//   celcius.classList.add('active');
//   farenheit.classList.remove('active');
//   const temp = 5/9*(dFarenheit - 32);
//   temperature.textContent = `${temp.toFixed(1)}°`;
//   feelsLike.textContent = `${(5/9*(realTempF - 32.)).toFixed(1)}°`;

//   });
  
//   farenheit.addEventListener('click', ()=>{
//   farenheit.classList.add('active');
//   celcius.classList.remove('active');
//   const temp = ((dCelcius) * 9/5) + 32;
//   temperature.textContent = `${temp.toFixed(1)}°`;
//   feelsLike.textContent = `${(((realTempC) * 9/5) + 32).toFixed(1)}°`;

//   });

// fetch(`http://api.weatherapi.com/v1/current.json?key=94f0140b1a77421492685656232807&q=Abidjan&aqi=no`).then(res => res.json()).then(data => console.log(data));

function getJson(url, errmsg) {
  return fetch(url).then((response) =>{
      
    if(!response.ok)
  throw new Error(errmsg);
     return response.json();
    })
  }


  // ASYNC AWAIT

async function getWeather() {
  try{
    const month = ['January', 'February', 'March', 'April', 'may', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday', 'Sunday']
      const area = searchInput.value;
  
  const res = await  fetch(`http://api.weatherapi.com/v1/current.json?key=94f0140b1a77421492685656232807&q=${area}&aqi=no`);
  console.log(res);
  
  const data = await res.json();

      const  {current, location} = data;
      const now = new Date(location.localtime);
       const day = `${weekday[now.getDay() - 1]}`;
       const months = `${month[now.getMonth()]}`;
       const dates = `${now.getDate()}`;
       const year = `${now.getFullYear()}`;
       const hour = `${now.getHours()}`.padStart(2, 0);
       const minute = `${now.getMinutes()}`.padStart(2, 0);

       dCelcius = current.temp_c;
       dFarenheit = current.temp_f;
       realTempC = current.feelslike_c;
       realTempF = current.feelslike_f;

       // Show weather data
    locationArea.textContent = `${location.name}, ${location.country}`;
    date.textContent = `${day},${months}  ${dates}, ${year} at ${hour}:${minute}`;
    condition.textContent = current.condition.text;
    console.log(current.condition.icon);
      image.src = current.condition.icon;
      temperature.textContent = `${current.temp_c}°`;
      feelsLike.textContent = `${current.feelslike_c}°`;
      humidity.textContent = `${current.humidity}%`;
      windSpeed.textContent = `${current.wind_kph} kph`;
      pressure.textContent = `${current.pressure_mb} hPa`;

      if(farenheit.classList.contains('active')){
        temperature.textContent = `${current.temp_f}°`;
      feelsLike.textContent = `${current.feelslike_f}°`;
      }

      // Display container
      val.classList.remove('hidden')
      infoContainer.classList.remove('hidden');
      errorContainer.classList.add('hidden')
    

  console.log(data);
  } catch(err) {
    err();
  }
}


celcius.addEventListener('click', ()=>{
  celcius.classList.add('active');
  farenheit.classList.remove('active');
  const temp = 5/9*(dFarenheit - 32);
  temperature.textContent = `${temp.toFixed(1)}°`;
  feelsLike.textContent = `${(5/9*(realTempF - 32.)).toFixed(1)}°`;

  });
  
  farenheit.addEventListener('click', ()=>{
  farenheit.classList.add('active');
  celcius.classList.remove('active');
  const temp = ((dCelcius) * 9/5) + 32;
  temperature.textContent = `${temp.toFixed(1)}°`;
  feelsLike.textContent = `${(((realTempC) * 9/5) + 32).toFixed(1)}°`;
  })

window.addEventListener('keydown', (e) => {
  if(e.key !== 'Enter') return
  getWeather();
  searchInput.value = '';
})


// console.log();
// fetch('http://api.weatherstack.com/current?access_key=b071d9fc208a96771e27c204681645ba&query=new york').then(
//   res => console.log(res.json())
// )