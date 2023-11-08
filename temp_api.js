// Retrieve data from the Weather API 
// It is going to return information of the weather of the the city request

(async(city) => {
    try {
        const API_KEY = '6791eddb42e7466f9f332842230711';
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = await response.json();
        //console.log(data);
        console.log('The city is :', data.location.name);
        console.log('The local time for ' + data.location.name + ' is ' + data.location.localtime);
        console.log('The weather condition for ' + data.location.name + ' is ' + data.current.condition.text);
    } catch (error) {
        console.log('Error: ', error)
    }
})('Rotterdam');