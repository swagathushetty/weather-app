const key ='aHuliptDg33jwJqYUoAkiySjzovV4udL'

//refer docs 1.1
//get weather info
const getWeather=async(id)=>{

    const base ='https://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${id}?apikey=${key}`

    const response=await fetch(base+query)
    const data= await response.json()

    // console.log(data)

    return data

}

//refer docs 1.2
//get city info
const getCity=async(city)=>{
    const base ='https://dataservice.accuweather.com/locations/v1/cities/search'
    const query=`?apikey=${key}&q=${city}`

    const response=await fetch(base+query)
    const data=await response.json()

    if(!data){
        throw new Error('city not found')
    }

    return data[0]
}

// getCity('mumbai').then((data)=>{
//     return getWeather(data.Key)
// })
// .then((data1)=>{
//     console.log('weather is ',data1)
// })
// .catch((err)=>{
//     console.log(err)
// })

// getWeather("204842")
