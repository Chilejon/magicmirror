import React, { Component } from 'react'

const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=Stockport,uk&APPID=3c4cea50abb1fffb2845db71e8490427'
//const forecastAPI = 'http://api.openweathermap.org/data/2.5/forecast?q=Stockport,UK&&appid=3c4cea50abb1fffb2845db71e8490427'

class Weather extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weather: {
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
            },
            forecast: {
                cod: "200",
                message: 0.0064,
                cnt: 40,
                list: [
                {
                dt: 1552737600,
                main: {
                temp: 283.39,
                temp_min: 282.762,
                temp_max: 283.39,
                pressure: 992.81,
                sea_level: 992.81,
                grnd_level: 979.18,
                humidity: 94,
                temp_kf: 0.62
                },
                weather: [
                {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 8.71,
                deg: 226.5
                },
                rain: {
                '3h': 3.4475
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-16 12:00:00"
                },
                {
                dt: 1552748400,
                main: {
                temp: 283.5,
                temp_min: 283.029,
                temp_max: 283.5,
                pressure: 988.53,
                sea_level: 988.53,
                grnd_level: 974.93,
                humidity: 93,
                temp_kf: 0.47
                },
                weather: [
                {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 8.86,
                deg: 221.002
                },
                rain: {
                '3h': 3.0575
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-16 15:00:00"
                },
                {
                dt: 1552759200,
                main: {
                temp: 282.87,
                temp_min: 282.558,
                temp_max: 282.87,
                pressure: 985.87,
                sea_level: 985.87,
                grnd_level: 972.06,
                humidity: 96,
                temp_kf: 0.31
                },
                weather: [
                {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 8.37,
                deg: 246.506
                },
                rain: {
                '3h': 3.4325
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-16 18:00:00"
                },
                {
                dt: 1552770000,
                main: {
                temp: 277.73,
                temp_min: 277.571,
                temp_max: 277.73,
                pressure: 990.05,
                sea_level: 990.05,
                grnd_level: 976.1,
                humidity: 95,
                temp_kf: 0.16
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 80
                },
                wind: {
                speed: 8.03,
                deg: 287
                },
                rain: {
                '3h': 1.345
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-16 21:00:00"
                },
                {
                dt: 1552780800,
                main: {
                temp: 276.788,
                temp_min: 276.788,
                temp_max: 276.788,
                pressure: 992.6,
                sea_level: 992.6,
                grnd_level: 978.54,
                humidity: 96,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 6.36,
                deg: 282.501
                },
                rain: {
                '3h': 0.42
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-17 00:00:00"
                },
                {
                dt: 1552791600,
                main: {
                temp: 276.274,
                temp_min: 276.274,
                temp_max: 276.274,
                pressure: 994.64,
                sea_level: 994.64,
                grnd_level: 980.45,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 6.25,
                deg: 281.502
                },
                rain: {
                '3h': 1.9
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-17 03:00:00"
                },
                {
                dt: 1552802400,
                main: {
                temp: 275.848,
                temp_min: 275.848,
                temp_max: 275.848,
                pressure: 996.66,
                sea_level: 996.66,
                grnd_level: 982.51,
                humidity: 95,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 24
                },
                wind: {
                speed: 6.11,
                deg: 280
                },
                rain: {
                '3h': 2.105
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-17 06:00:00"
                },
                {
                dt: 1552813200,
                main: {
                temp: 276.978,
                temp_min: 276.978,
                temp_max: 276.978,
                pressure: 998.85,
                sea_level: 998.85,
                grnd_level: 984.71,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 48
                },
                wind: {
                speed: 6.51,
                deg: 283.002
                },
                rain: {
                '3h': 2.55
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-17 09:00:00"
                },
                {
                dt: 1552824000,
                main: {
                temp: 277.792,
                temp_min: 277.792,
                temp_max: 277.792,
                pressure: 1000.51,
                sea_level: 1000.51,
                grnd_level: 986.36,
                humidity: 92,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 64
                },
                wind: {
                speed: 6.62,
                deg: 269.502
                },
                rain: {
                '3h': 0.735
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-17 12:00:00"
                },
                {
                dt: 1552834800,
                main: {
                temp: 277.383,
                temp_min: 277.383,
                temp_max: 277.383,
                pressure: 1001.1,
                sea_level: 1001.1,
                grnd_level: 986.74,
                humidity: 91,
                temp_kf: 0
                },
                weather: [
                {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 6.71,
                deg: 284.004
                },
                rain: {
                '3h': 3.095
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-17 15:00:00"
                },
                {
                dt: 1552845600,
                main: {
                temp: 278.712,
                temp_min: 278.712,
                temp_max: 278.712,
                pressure: 1005.31,
                sea_level: 1005.31,
                grnd_level: 991.15,
                humidity: 92,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 6.26,
                deg: 317.004
                },
                rain: {
                '3h': 0.175
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-17 18:00:00"
                },
                {
                dt: 1552856400,
                main: {
                temp: 277.795,
                temp_min: 277.795,
                temp_max: 277.795,
                pressure: 1009.93,
                sea_level: 1009.93,
                grnd_level: 995.53,
                humidity: 93,
                temp_kf: 0
                },
                weather: [
                {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
                }
                ],
                clouds: {
                all: 0
                },
                wind: {
                speed: 5.02,
                deg: 322.001
                },
                rain: { },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-17 21:00:00"
                },
                {
                dt: 1552867200,
                main: {
                temp: 276.205,
                temp_min: 276.205,
                temp_max: 276.205,
                pressure: 1013.58,
                sea_level: 1013.58,
                grnd_level: 999.12,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
                }
                ],
                clouds: {
                all: 0
                },
                wind: {
                speed: 4.36,
                deg: 320.001
                },
                rain: { },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-18 00:00:00"
                },
                {
                dt: 1552878000,
                main: {
                temp: 275.055,
                temp_min: 275.055,
                temp_max: 275.055,
                pressure: 1015.67,
                sea_level: 1015.67,
                grnd_level: 1001.12,
                humidity: 91,
                temp_kf: 0
                },
                weather: [
                {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
                }
                ],
                clouds: {
                all: 0
                },
                wind: {
                speed: 3.26,
                deg: 311.002
                },
                rain: { },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-18 03:00:00"
                },
                {
                dt: 1552888800,
                main: {
                temp: 275.222,
                temp_min: 275.222,
                temp_max: 275.222,
                pressure: 1017.5,
                sea_level: 1017.5,
                grnd_level: 1003.01,
                humidity: 90,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 80
                },
                wind: {
                speed: 2.42,
                deg: 297
                },
                rain: {
                '3h': 0.024999999999999
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-18 06:00:00"
                },
                {
                dt: 1552899600,
                main: {
                temp: 278.228,
                temp_min: 278.228,
                temp_max: 278.228,
                pressure: 1019.61,
                sea_level: 1019.61,
                grnd_level: 1005.23,
                humidity: 97,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 64
                },
                wind: {
                speed: 2.06,
                deg: 291.502
                },
                rain: {
                '3h': 0.020000000000003
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-18 09:00:00"
                },
                {
                dt: 1552910400,
                main: {
                temp: 281,
                temp_min: 281,
                temp_max: 281,
                pressure: 1021.06,
                sea_level: 1021.06,
                grnd_level: 1006.59,
                humidity: 98,
                temp_kf: 0
                },
                weather: [
                {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
                }
                ],
                clouds: {
                all: 32
                },
                wind: {
                speed: 3.1,
                deg: 299.5
                },
                rain: { },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-18 12:00:00"
                },
                {
                dt: 1552921200,
                main: {
                temp: 280.248,
                temp_min: 280.248,
                temp_max: 280.248,
                pressure: 1022,
                sea_level: 1022,
                grnd_level: 1007.66,
                humidity: 95,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 80
                },
                wind: {
                speed: 3.71,
                deg: 288.503
                },
                rain: {
                '3h': 0.015000000000001
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-18 15:00:00"
                },
                {
                dt: 1552932000,
                main: {
                temp: 279.21,
                temp_min: 279.21,
                temp_max: 279.21,
                pressure: 1023.37,
                sea_level: 1023.37,
                grnd_level: 1009,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 2.92,
                deg: 291.501
                },
                rain: {
                '3h': 0.049999999999997
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-18 18:00:00"
                },
                {
                dt: 1552942800,
                main: {
                temp: 278.035,
                temp_min: 278.035,
                temp_max: 278.035,
                pressure: 1025.26,
                sea_level: 1025.26,
                grnd_level: 1010.83,
                humidity: 91,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 1.77,
                deg: 282.003
                },
                rain: {
                '3h': 0.050000000000004
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-18 21:00:00"
                },
                {
                dt: 1552953600,
                main: {
                temp: 277.801,
                temp_min: 277.801,
                temp_max: 277.801,
                pressure: 1025.89,
                sea_level: 1025.89,
                grnd_level: 1011.3,
                humidity: 93,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 1.21,
                deg: 219.006
                },
                rain: {
                '3h': 0.14
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-19 00:00:00"
                },
                {
                dt: 1552964400,
                main: {
                temp: 277.758,
                temp_min: 277.758,
                temp_max: 277.758,
                pressure: 1025.53,
                sea_level: 1025.53,
                grnd_level: 1011.07,
                humidity: 93,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 68
                },
                wind: {
                speed: 1.77,
                deg: 177.003
                },
                rain: {
                '3h': 0.099999999999994
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-19 03:00:00"
                },
                {
                dt: 1552975200,
                main: {
                temp: 277.343,
                temp_min: 277.343,
                temp_max: 277.343,
                pressure: 1025.43,
                sea_level: 1025.43,
                grnd_level: 1010.83,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 2.55,
                deg: 174.5
                },
                rain: {
                '3h': 0.13500000000001
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-19 06:00:00"
                },
                {
                dt: 1552986000,
                main: {
                temp: 278.9,
                temp_min: 278.9,
                temp_max: 278.9,
                pressure: 1025.85,
                sea_level: 1025.85,
                grnd_level: 1011.33,
                humidity: 96,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 76
                },
                wind: {
                speed: 2.23,
                deg: 194
                },
                rain: {
                '3h': 0.355
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-19 09:00:00"
                },
                {
                dt: 1552996800,
                main: {
                temp: 282.038,
                temp_min: 282.038,
                temp_max: 282.038,
                pressure: 1025.85,
                sea_level: 1025.85,
                grnd_level: 1011.6,
                humidity: 100,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 2.76,
                deg: 230.001
                },
                rain: {
                '3h': 0.18
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-19 12:00:00"
                },
                {
                dt: 1553007600,
                main: {
                temp: 282.514,
                temp_min: 282.514,
                temp_max: 282.514,
                pressure: 1025.42,
                sea_level: 1025.42,
                grnd_level: 1011.27,
                humidity: 96,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 3.21,
                deg: 266
                },
                rain: {
                '3h': 0.37
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-19 15:00:00"
                },
                {
                dt: 1553018400,
                main: {
                temp: 281.482,
                temp_min: 281.482,
                temp_max: 281.482,
                pressure: 1025.44,
                sea_level: 1025.44,
                grnd_level: 1011.14,
                humidity: 92,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 64
                },
                wind: {
                speed: 3.21,
                deg: 245.501
                },
                rain: {
                '3h': 0.019999999999996
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-19 18:00:00"
                },
                {
                dt: 1553029200,
                main: {
                temp: 280.834,
                temp_min: 280.834,
                temp_max: 280.834,
                pressure: 1026.42,
                sea_level: 1026.42,
                grnd_level: 1012.02,
                humidity: 92,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 100
                },
                wind: {
                speed: 4.01,
                deg: 239.002
                },
                rain: {
                '3h': 0.28
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-19 21:00:00"
                },
                {
                dt: 1553040000,
                main: {
                temp: 281.414,
                temp_min: 281.414,
                temp_max: 281.414,
                pressure: 1026.8,
                sea_level: 1026.8,
                grnd_level: 1012.54,
                humidity: 93,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 100
                },
                wind: {
                speed: 4.16,
                deg: 245.004
                },
                rain: {
                '3h': 0.33
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-20 00:00:00"
                },
                {
                dt: 1553050800,
                main: {
                temp: 281.934,
                temp_min: 281.934,
                temp_max: 281.934,
                pressure: 1027.25,
                sea_level: 1027.25,
                grnd_level: 1012.92,
                humidity: 95,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 3.82,
                deg: 268
                },
                rain: {
                '3h': 0.69
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-20 03:00:00"
                },
                {
                dt: 1553061600,
                main: {
                temp: 281.768,
                temp_min: 281.768,
                temp_max: 281.768,
                pressure: 1028.72,
                sea_level: 1028.72,
                grnd_level: 1014.29,
                humidity: 97,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 92
                },
                wind: {
                speed: 3.46,
                deg: 288.006
                },
                rain: {
                '3h': 0.94
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-20 06:00:00"
                },
                {
                dt: 1553072400,
                main: {
                temp: 281.702,
                temp_min: 281.702,
                temp_max: 281.702,
                pressure: 1031.11,
                sea_level: 1031.11,
                grnd_level: 1016.8,
                humidity: 99,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 64
                },
                wind: {
                speed: 3.01,
                deg: 319.5
                },
                rain: {
                '3h': 0.12
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-20 09:00:00"
                },
                {
                dt: 1553083200,
                main: {
                temp: 283.42,
                temp_min: 283.42,
                temp_max: 283.42,
                pressure: 1032.4,
                sea_level: 1032.4,
                grnd_level: 1018,
                humidity: 100,
                temp_kf: 0
                },
                weather: [
                {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
                }
                ],
                clouds: {
                all: 24
                },
                wind: {
                speed: 2.56,
                deg: 303.508
                },
                rain: { },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-20 12:00:00"
                },
                {
                dt: 1553094000,
                main: {
                temp: 284.199,
                temp_min: 284.199,
                temp_max: 284.199,
                pressure: 1032.04,
                sea_level: 1032.04,
                grnd_level: 1017.8,
                humidity: 95,
                temp_kf: 0
                },
                weather: [
                {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
                }
                ],
                clouds: {
                all: 12
                },
                wind: {
                speed: 1.92,
                deg: 257.5
                },
                rain: { },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-20 15:00:00"
                },
                {
                dt: 1553104800,
                main: {
                temp: 283.203,
                temp_min: 283.203,
                temp_max: 283.203,
                pressure: 1032.14,
                sea_level: 1032.14,
                grnd_level: 1017.86,
                humidity: 89,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 1.21,
                deg: 178.001
                },
                rain: {
                '3h': 0.009999999999998
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-20 18:00:00"
                },
                {
                dt: 1553115600,
                main: {
                temp: 282.13,
                temp_min: 282.13,
                temp_max: 282.13,
                pressure: 1032.58,
                sea_level: 1032.58,
                grnd_level: 1018.17,
                humidity: 90,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 32
                },
                wind: {
                speed: 2.56,
                deg: 224.501
                },
                rain: {
                '3h': 0.030000000000001
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-20 21:00:00"
                },
                {
                dt: 1553126400,
                main: {
                temp: 279.721,
                temp_min: 279.721,
                temp_max: 279.721,
                pressure: 1032.05,
                sea_level: 1032.05,
                grnd_level: 1017.6,
                humidity: 97,
                temp_kf: 0
                },
                weather: [
                {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
                }
                ],
                clouds: {
                all: 8
                },
                wind: {
                speed: 2.6,
                deg: 211.001
                },
                rain: { },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-21 00:00:00"
                },
                {
                dt: 1553137200,
                main: {
                temp: 279.732,
                temp_min: 279.732,
                temp_max: 279.732,
                pressure: 1031.78,
                sea_level: 1031.78,
                grnd_level: 1017.34,
                humidity: 98,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
                }
                ],
                clouds: {
                all: 64
                },
                wind: {
                speed: 2.35,
                deg: 213.503
                },
                rain: {
                '3h': 0.020000000000003
                },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-21 03:00:00"
                },
                {
                dt: 1553148000,
                main: {
                temp: 279.58,
                temp_min: 279.58,
                temp_max: 279.58,
                pressure: 1031.27,
                sea_level: 1031.27,
                grnd_level: 1016.8,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
                }
                ],
                clouds: {
                all: 88
                },
                wind: {
                speed: 2.69,
                deg: 215.004
                },
                rain: { },
                sys: {
                pod: "n"
                },
                dt_txt: "2019-03-21 06:00:00"
                },
                {
                dt: 1553158800,
                main: {
                temp: 281.085,
                temp_min: 281.085,
                temp_max: 281.085,
                pressure: 1031.46,
                sea_level: 1031.46,
                grnd_level: 1017.21,
                humidity: 94,
                temp_kf: 0
                },
                weather: [
                {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
                }
                ],
                clouds: {
                all: 56
                },
                wind: {
                speed: 2.91,
                deg: 217.002
                },
                rain: {
                '3h': 0.030000000000001
                },
                sys: {
                pod: "d"
                },
                dt_txt: "2019-03-21 09:00:00"
                }
                ],
                city: {
                id: 2636882,
                name: "Stockport",
                coord: {
                lat: 53.4098,
                lon: -2.1577
                },
                country: "GB",
                population: 139052
                }
                }
        };
    }

    componentDidMount() {
        fetch(weatherAPI)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    weather: json
                })
            });

        // fetch(forecastAPI)
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json);
        //     this.setState({
        //         forecast: json
        //     })
        // });
    }

    render() {
        var celcious2 = Math.trunc(this.state.weather.main.temp - 273.15)
        var weatherIcon = "http://openweathermap.org/img/w/" + this.state.weather.weather[0].icon + ".png" 
        
        var forecastIcon1 = "http://openweathermap.org/img/w/" +  this.state.forecast.list[0].weather[0].icon + ".png"
        var forecastTime1 =  this.state.forecast.list[0].dt_txt
        
        var forecastIcon2 = "http://openweathermap.org/img/w/" +  this.state.forecast.list[1].weather[0].icon + ".png"
        var forecastTime2 =  this.state.forecast.list[1].dt_txt

        var forecastIcon3 = "http://openweathermap.org/img/w/" +  this.state.forecast.list[2].weather[0].icon + ".png"
        var forecastTime3 =  this.state.forecast.list[2].dt_txt
        
        var forecastIcon4 = "http://openweathermap.org/img/w/" +  this.state.forecast.list[3].weather[0].icon + ".png"
        var forecastTime4 =  this.state.forecast.list[3].dt_txt
        
        var forecast40 = []
        var list = this.state.forecast.list
        for (var item in list)
        {
//            console.log(list[item].weather[0].icon)
            forecast40.push({"weather" : "http://openweathermap.org/img/w/" + list[item].weather[0].icon + ".png"})
        }

        var icons = []
        for (var item in forecast40)
        {
            icons.push("<img src=" + forecast40[item].weather + " />")
        }

        // var sunrise = new Date(this.state.weather.sys.sunrise);
        // var sunset = new Date(this.state.weather.sys.sunset);
        return (
            <fragment>
                <h2>Weather</h2>
                <h3>{this.state.weather.name}</h3>
                <p><img src={weatherIcon}/></p>
                <h3>{this.state.weather.weather[0].main}</h3>{this.state.weather.weather[0].description}
                <h3>temp: {celcious2}C</h3>
                {/* <br/>
                Sunrise: {sunrise.getYear()} {sunrise.getHours()} : {sunrise.getMinutes()}  Sunset: {sunset.getHours()} : {sunset.getMinutes()} */}
                
                <hr/>
                <h2>Forecast</h2>
                <p><img src={forecastIcon1}/>{forecastTime1}</p>
                <p><img src={forecastIcon2}/>{forecastTime2}</p>
                <p><img src={forecastIcon3}/>{forecastTime3}</p>
                <p><img src={forecastIcon4}/>{forecastTime4}</p>
                {icons}
                </fragment>
        )
    }
}

export default Weather;



