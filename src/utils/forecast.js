const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b8a72b35c684833755cc38159332c0f6/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            var tempF = body.currently.temperature;
            var tempC = Math.round((tempF -32) * 5/9);
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + tempC + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast