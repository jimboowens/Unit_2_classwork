$(document).ready(()=>{
    let submitCount=0
    console.log(submitCount)
    console.log('sanity check')
    $('#weather-form').submit((e)=>{
        e.preventDefault()
        // console.log('user Submitted e, which is:')
        // console.log (e)
        submitCount++
        let zip =''
        console.log('e is the last one')
        // if( typeof $('.zip-code') ==  "string" ){
        //     zip += $('.zip-code').val()
        //     const zipURL = `https://www.zipcodeapi.com/rest/${apiKeyCity}/city-zips.JSON/{zip}/Georgia`
        //     $.getJSON(zip, (zipData)=>{
        //         console.log(zip)
        //         console.log(zipData)
        //     })
        // }else{
            zip += $('.zip-code').val()
            console.log(zip)
        // }
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`
        $.getJSON(weatherURL,(weatherData)=>{
            console.log(`got JSON`)
            console.log(weatherData)
            const temps={
                curr:weatherData.main.temp,
                max:weatherData.main.temp_max,
                min:weatherData.main.temp_min,
                pressure:weatherData.main.pressure,
                humidity:weatherData.main.humidity,
            }
            let imageIcon = weatherData.weather[0].icon
            
            function getTime(dataID){
                const timeStamp = new Date(dataID*1000)
                let time = `${timeStamp.getHours()+17}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}`
                return time
            }

            let currentTime = getTime(weatherData.id)
            let sunrise = getTime(weatherData.sys.sunrise)
            let sunset = getTime(weatherData.sys.sunset)

            const newHTML = `
            <tr>
                <td> <img src="https://openweathermap.org/img/w/${imageIcon}.png" /> </td>
                <td class="name">${weatherData.name}</td>
                <td class="temp">${temps.curr}</td>
                <td class="max">${temps.max}</td>
                <td class="min">${temps.min}</td>
                <td class="pressure">${temps.pressure}</td>
                <td class="humidity">${temps.humidity}</td>
                <td class="time">${currentTime}</td>
                <td class="sunrise">${sunrise}</td>
                <td class="sunset">${sunset}</td>
                <td class="visibility">${weatherData.visibility}</td>
            </tr>
            `
            $('.weather-data').prepend(newHTML)
            if (submitCount===6){
                $(`.weather-data`).append(`
                <button type="submit" class="btn btn-success clear-contents">Clear Contents</button>`)
            }

            $(`.clear-contents`).click((e)=>{
                console.log('the clear button was hit')
                $(`.weather-data`).html(``)
            })
        })
        
    })
    

})