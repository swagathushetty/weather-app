//refer docs 2.1
const cityForm=document.querySelector('form')
const card=document.querySelector('.card')
const details=document.querySelector('.details')
const time=document.querySelector('img.time')
const icon=document.querySelector('.icon img')

console.log(icon)
const span=document.querySelector('span')

//refer docs 2.4
const updateUI=(data)=>{
    console.log(data)
    const {cityDets,weather}=data

    //update details template
    details.innerHTML=`
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather[0].WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather[0].Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `

    //update the night/day and icon images
    const iconSrc=`../img/icons/${weather[0].WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc)

    let timeSrc=null;
    if(weather[0].IsDayTime){
        timeSrc='../img/day.svg'
    } else{
        timeSrc = '../img/night.svg'
    }

    time.setAttribute('src',timeSrc)

    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

//refer docs 2.3
const updateCity=async(city)=>{
    const cityDets=await getCity(city)
    const weather=await getWeather(cityDets.Key)
    return {
        cityDets:cityDets,
        weather:weather
    }
}


//refer docs 2.2
cityForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    //get city value from user
    // const city=e.target[0].value.trim();
    const city=cityForm.city.value.trim()
    cityForm.reset()

    //update the UI with city
    updateCity(city).then((data)=>{
        console.log(data)
        updateUI(data)
    })
    .catch((e)=>{
        console.log('could not find the city SORRY !!!')
    })
})

span.addEventListener('click',()=>{
    span.parentElement.classList.add('d-none')
})
