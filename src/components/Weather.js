import React, { Component } from 'react'

const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=Stockport,uk&APPID=3c4cea50abb1fffb2845db71e8490427'

class Weather extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weather:{
                coord: {
                lon: -2.16,
                lat: 53.41
                },
                weather: [
                {
                id: 801,
                main: "XClouds",
                description: "few clouds",
                icon: "02n"
                }
                ],
                base: "stations",
                main: {
                temp: 280.2,
                pressure: 1021,
                humidity: 61,
                temp_min: 278.71,
                temp_max: 281.48
                },
                visibility: 10000,
                wind: {
                speed: 3.1,
                deg: 200
                },
                clouds: {
                all: 20
                },
                dt: 1552330182,
                sys: {
                type: 1,
                id: 1379,
                message: 0.0056,
                country: "GB",
                sunrise: 1552285910,
                sunset: 1552327570
                },
                id: 2636882,
                name: "Stockport",
                cod: 200
                }
        };
    }

    componentDidMount() {
        fetch(weatherAPI)
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                this.setState({
                    weather: json
                })
            });
    }


    render() {
        var celcious = Math.round((this.state.weather.main.temp - 273.15)* 10 ) / 10;
        var celcious2 = Math.trunc(this.state.weather.main.temp - 273.15);
        
        return (
                <fragment>
                    {this.state.weather.name}
                    <br/>
                     {this.state.weather.weather[0].main}
                     <br/>
                     {celcious2}C 
                </fragment>
        )
    }
}

export default Weather;



