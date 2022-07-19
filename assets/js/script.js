var requestUrlOne = "https://api.openweathermap.org/data/2.5/onecall?lat="
var requestUrlTwo = "&lon="
var requestUrlThree = "&appid=def401b47cf00146af8b234c0c6d2895&units=imperial"

var futureUrlOne = "api.openweathermap.org/data/2.5/forecast?lat="
var futureUrlTwo = "&lon="
var futureUrlThree = "&appid=def401b47cf00146af8b234c0c6d2895"

var cityUrl = "https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=def401b47cf00146af8b234c0c6d2895&q="

var currentDate = moment().format('M/D/YY')

var findOutBtn = document.getElementById("find-out-btn")
var city = document.getElementById("location").value
var recentlySearchedList = document.getElementById("searched-list")
var uvBox = document.getElementById("uv-box")
var icon = document.getElementById("main-icon")
var descript = document.getElementById("main-current")

var searchedCities = []


var cardOne = document.getElementById("card-1-title")
var cardTwo = document.getElementById("card-2-title")
var cardThree = document.getElementById("card-3-title")
var cardFour = document.getElementById("card-4-title")
var cardFive = document.getElementById("card-5-title")

cardOne.textContent = moment().add(1,'d').format('M/D/YY')
cardTwo.textContent = moment().add(2,'d').format('M/D/YY')
cardThree.textContent = moment().add(3,'d').format('M/D/YY')
cardFour.textContent = moment().add(4,'d').format('M/D/YY')
cardFive.textContent = moment().add(5,'d').format('M/D/YY')



function newYorkCity() {
    
    var nycUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.73&lon=-73.93&appid=def401b47cf00146af8b234c0c6d2895&units=imperial"

    fetch(nycUrl)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            console.log(data)

            var mainTemp=document.getElementById("main-temp")
            var mainWind=document.getElementById("main-wind")
            var mainHumidity=document.getElementById("main-humidity")
            var mainUV=document.getElementById("uv-box")

            mainTemp.textContent = "Temp: " + data.current.temp
            mainWind.textContent = "Wind: " + data.current.wind_speed
            mainHumidity.textContent = "Humidity: " + data.current.humidity
            mainUV.textContent = data.current.uvi
            icon.src = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"
            descript.textContent = data.current.weather[0].main

            if (data.current.temp >+ 70) {
                document.getElementById("main-header").textContent = "No, you do not need a coat in New York City on " + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "You could wear a coat anyway"

                document.getElementById("card-6-sub").textContent = "Just, you know, if you wanted to"
            }

            if (data.current.temp <= 70) {
                document.getElementById("main-header").textContent = "You will want a jacket in New York City on" + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "Just a wind breaker"

                document.getElementById("card-6-sub").textContent = "Because you deserve a break"
            }

            if (data.current.temp <= 50) {
                document.getElementById("main-header").textContent = "Yes, you need a coat in New York City on" + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "Can we suggest a pink coat?"

                document.getElementById("card-6-sub").textContent = "We just think you'd look dashing in it"
            }

            if (data.current.temp <= 30) {
                document.getElementById("main-header").textContent = "You need a really warm coat in New York City on" + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "In lieu of a coat, you can hug strangers"

                document.getElementById("card-6-sub").textContent = "But we suggest the coat"
            }

            if (data.current.temp <= 0) {
                document.getElementById("main-header").textContent = "You are going to want SEVERAL coats in New York City on" + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "You can also stay inside"

                document.getElementById("card-6-sub").textContent = "The outside is a terrifying place"
            }

            if (data.current.uvi < 3) {
                uvBox.setAttribute("class", "low-uv")
            }

            if (data.current.uvi >= 3) {
                uvBox.setAttribute("class", "moderate-uv")
            }

            if (data.current.uvi >= 6) {
                uvBox.setAttribute("class", "high-uv")
            }

            if (data.current.uvi >= 8) {
                uvBox.setAttribute("class", "very-high-uv")
            }

            if (data.current.uvi >= 11) {
                uvBox.setAttribute("class", "extreme-uv")
            }

            if(data.current.weather.main === "clear") {
                icon.src = "https://openweathermap.org/img/wn/01d@2x.png"
            }

            //Card One

            var oneIcon = document.getElementById("card-1-icon")
            var oneTemp = document.getElementById("card-1-temp")
            var oneWind = document.getElementById("card-1-wind")
            var oneHumidity = document.getElementById("card-1-humidity")

            oneIcon.src = "https://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png"
            oneTemp.textContent = "Temp: " + data.daily[0].temp.day
            oneWind.textContent = "Wind: " + data.daily[0].wind_speed
            oneHumidity.textContent = "Humidity: " + data.daily[0].humidity


            //Card Two

            var twoIcon = document.getElementById("card-2-icon")
            var twoTemp = document.getElementById("card-2-temp")
            var twoWind = document.getElementById("card-2-wind")
            var twoHumidity = document.getElementById("card-2-humidity")

            twoIcon.src = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png"
            twoTemp.textContent = "Temp: " + data.daily[1].temp.day
            twoWind.textContent = "Wind: " + data.daily[1].wind_speed
            twoHumidity.textContent = "Humidity: " + data.daily[1].humidity

            //Card Three

            var threeIcon = document.getElementById("card-3-icon")
            var threeTemp = document.getElementById("card-3-temp")
            var threeWind = document.getElementById("card-3-wind")
            var threeHumidity = document.getElementById("card-3-humidity")

            threeIcon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png"
            threeTemp.textContent = "Temp: " + data.daily[2].temp.day
            threeWind.textContent = "Wind: " + data.daily[2].wind_speed
            threeHumidity.textContent = "Humidity: " + data.daily[2].humidity

            //Card Four

            var fourIcon = document.getElementById("card-4-icon")
            var fourTemp = document.getElementById("card-4-temp")
            var fourWind = document.getElementById("card-4-wind")
            var fourHumidity = document.getElementById("card-4-humidity")

            fourIcon.src = "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png"
            fourTemp.textContent = "Temp: " + data.daily[3].temp.day
            fourWind.textContent = "Wind: " + data.daily[3].wind_speed
            fourHumidity.textContent = "Humidity: " + data.daily[3].humidity

            //Card Five

            var fiveIcon = document.getElementById("card-5-icon")
            var fiveTemp = document.getElementById("card-5-temp")
            var fiveWind = document.getElementById("card-5-wind")
            var fiveHumidity = document.getElementById("card-5-humidity")

            fiveIcon.src = "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png"
            fiveTemp.textContent = "Temp: " + data.daily[4].temp.day
            fiveWind.textContent = "Wind: " + data.daily[4].wind_speed
            fiveHumidity.textContent = "Humidity: " + data.daily[4].humidity

        })
        
}

function buildFullCityUrl() {
    var city = document.getElementById("location").value

    const fullCityUrl = cityUrl.concat(city)

    console.log(fullCityUrl)

    findCityLocal(fullCityUrl)
}

function findCityLocal(x) {

    fetch(x)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)

            var lat = data[0].lon

            var lon = data[0].lat

            console.log(lon)

            pullWeatherData(lon, lat)
    })
}

function pullWeatherData(x, y) {

    var city = document.getElementById("location").value
    
    const weatherUrl = requestUrlOne.concat(x + requestUrlTwo + y + requestUrlThree)

    console.log(weatherUrl)

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            console.log(data)

            var mainTemp=document.getElementById("main-temp")
            var mainWind=document.getElementById("main-wind")
            var mainHumidity=document.getElementById("main-humidity")
            var mainUV=document.getElementById("uv-box")

            mainTemp.textContent = "Temp: " + data.current.temp
            mainWind.textContent = "Wind: " + data.current.wind_speed
            mainHumidity.textContent = "Humidity: " + data.current.humidity
            mainUV.textContent = data.current.uvi
            icon.src = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"
            descript.textContent = data.current.weather[0].main

            if (data.current.temp >+ 70) {
                document.getElementById("main-header").textContent = "No, you do not need a coat in " + city + " on " + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "You could wear a coat anyway"

                document.getElementById("card-6-sub").textContent = "Just, you know, if you wanted to"
            }

            if (data.current.temp <= 70) {
                document.getElementById("main-header").textContent = "You will want a jacket in " + city + " on " + moment().format('MMMM Do YYYY')
            
                document.getElementById("card-6-title").textContent = "Just a wind breaker"

                document.getElementById("card-6-sub").textContent = "Because you deserve a break"
            }

            if (data.current.temp <= 50) {
                document.getElementById("main-header").textContent = "Yes, you need a coat in " + city + " on " + moment().format('MMMM Do YYYY')

                document.getElementById("card-6-title").textContent = "Can we suggest a pink coat?"

                document.getElementById("card-6-sub").textContent = "We just think you'd look dashing in it"
            }

            if (data.current.temp <= 30) {
                document.getElementById("main-header").textContent = "You need a really warm coat in " + city + " on " + moment().format('MMMM Do YYYY')
            
                document.getElementById("card-6-title").textContent = "In lieu of a coat, you can hug strangers"

                document.getElementById("card-6-sub").textContent = "But we suggest the coat"
            }

            if (data.current.temp <= 0) {
                document.getElementById("main-header").textContent = "You are going to want SEVERAL coats " + city + " on " + moment().format('MMMM Do YYYY')
           
                document.getElementById("card-6-title").textContent = "You can also stay inside"

                document.getElementById("card-6-sub").textContent = "The outside is a terrifying place"
            }

            if (data.current.uvi < 3) {
                uvBox.setAttribute("background-color", "blue")
            }

            if (data.current.uvi < 3) {
                uvBox.setAttribute("class", "low-uv")
            }

            if (data.current.uvi >= 3) {
                uvBox.setAttribute("class", "moderate-uv")
            }

            if (data.current.uvi >= 6) {
                uvBox.setAttribute("class", "high-uv")
            }

            if (data.current.uvi >= 8) {
                uvBox.setAttribute("class", "very-high-uv")
            }

            if (data.current.uvi >= 11) {
                uvBox.setAttribute("class", "extreme-uv")
            }

            //Card One

            var oneIcon = document.getElementById("card-1-icon")
            var oneTemp = document.getElementById("card-1-temp")
            var oneWind = document.getElementById("card-1-wind")
            var oneHumidity = document.getElementById("card-1-humidity")

            oneIcon.src = "https://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png"
            oneTemp.textContent = "Temp: " + data.daily[0].temp.day
            oneWind.textContent = "Wind: " + data.daily[0].wind_speed
            oneHumidity.textContent = "Humidity: " + data.daily[0].humidity


            //Card Two

            var twoIcon = document.getElementById("card-2-icon")
            var twoTemp = document.getElementById("card-2-temp")
            var twoWind = document.getElementById("card-2-wind")
            var twoHumidity = document.getElementById("card-2-humidity")

            twoIcon.src = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png"
            twoTemp.textContent = "Temp: " + data.daily[1].temp.day
            twoWind.textContent = "Wind: " + data.daily[1].wind_speed
            twoHumidity.textContent = "Humidity: " + data.daily[1].humidity

            //Card Three

            var threeIcon = document.getElementById("card-3-icon")
            var threeTemp = document.getElementById("card-3-temp")
            var threeWind = document.getElementById("card-3-wind")
            var threeHumidity = document.getElementById("card-3-humidity")

            threeIcon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png"
            threeTemp.textContent = "Temp: " + data.daily[2].temp.day
            threeWind.textContent = "Wind: " + data.daily[2].wind_speed
            threeHumidity.textContent = "Humidity: " + data.daily[2].humidity

            //Card Four

            var fourIcon = document.getElementById("card-4-icon")
            var fourTemp = document.getElementById("card-4-temp")
            var fourWind = document.getElementById("card-4-wind")
            var fourHumidity = document.getElementById("card-4-humidity")

            fourIcon.src = "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png"
            fourTemp.textContent = "Temp: " + data.daily[3].temp.day
            fourWind.textContent = "Wind: " + data.daily[3].wind_speed
            fourHumidity.textContent = "Humidity: " + data.daily[3].humidity

            //Card Five

            var fiveIcon = document.getElementById("card-5-icon")
            var fiveTemp = document.getElementById("card-5-temp")
            var fiveWind = document.getElementById("card-5-wind")
            var fiveHumidity = document.getElementById("card-5-humidity")

            fiveIcon.src = "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png"
            fiveTemp.textContent = "Temp: " + data.daily[4].temp.day
            fiveWind.textContent = "Wind: " + data.daily[4].wind_speed
            fiveHumidity.textContent = "Humidity: " + data.daily[4].humidity

        })
    
        document.getElementById("location").value = ""
}


function addToSearchList() {
    var city = document.getElementById("location").value

    recentlySearchedList.innerHTML = ""

    searchedCities.unshift(city)

    console.log(typeof searchedCities)

    console.log(searchedCities)

    let i = 0

    while (i < 6){
        var searchListItem = document.createElement("li")
        searchListItem.textContent = searchedCities[i]
        recentlySearchedList.appendChild(searchListItem)
        i++
    }

    buildFullCityUrl()

}

findOutBtn.addEventListener('click', function(event){
    event.preventDefault()
    var city = document.getElementById("location").value

    if (city === ""){
        return false;
    } else {
        addToSearchList()
    }
})

newYorkCity()
