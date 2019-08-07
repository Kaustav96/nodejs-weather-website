console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messagetwo = document.querySelector('#message-2');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();//prevents default behaviour and stops browser from refreshing

    const location = search.value;
    messageOne.textContent = 'Loading...';
    messagetwo.textContent = '';
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent="Location is - "+data.location;
                messagetwo.textContent="Forecast is - "+data.forecast;
                console.log("Location given - " + data.location)
                console.log("Forecast given - " +data.forecast)
            }
        })
    })
})

