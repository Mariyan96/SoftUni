function attachEvents(){
    let input = $('#location');
    let submitBtn=$('#submit');
    submitBtn.on('click',function(){
        let req ={
            method:'GET',
            url:'https://judgetests.firebaseio.com/locations.json',
            success:getWeather,
            error:handleError
        }
        $.ajax(req);
    });
    function getWeather(cities){
        let searchedCity = input.val();
        for(city of cities){
            if(city.name===searchedCity){
                let req = {
                    method:'GET',
                    url:`https://judgetests.firebaseio.com/forecast/today/${city.code}.json`,
                    success:displayForecast,
                    error:handleError
                }
                $.ajax(req);
                function displayForecast(data){
                    $('#forecast').css('display','block');
                    let symbol='';
                    switch(data.forecast.condition){
                        case 'Rain':
                            symbol='&#x2614';
                            break;
                        case 'Sunny':
                            symbol='&#x2600';
                            break;
                        case 'Partly sunny':
                            symbol='&#x26C5';
                            break;
                        case 'Overcast':
                            symbol='&#x2601';
                            break;
                    }
                    $('#current').append($(`<span class="condition symbol">${symbol}</span>`));
                    $('.condition')
                        .append($(`<span class="forecast-data">${data.name}</span>`))
                        .append($(`<span class="forecast-data">${data.forecast.low+'&#176'}/${data.forecast.high+'&#176'}</span>`))
                        .append($(`<span class="forecast-data">${data.forecast.condition}</span>`))

                    let req ={
                        method:'GET',
                        url:`https://judgetests.firebaseio.com/forecast/upcoming/${city.code}.json`,
                        success:displayThreeDay,
                        error:handleError
                    }
                    $.ajax(req);
                    function displayThreeDay(days){
                        let symbol='';
                        for(day of days.forecast){
                            switch(data.forecast.condition){
                                case 'Rain':
                                    symbol='&#x2614';
                                    break;
                                case 'Sunny':
                                    symbol='&#x2600';
                                    break;
                                case 'Partly sunny':
                                    symbol='&#x26C5';
                                    break;
                                case 'Overcast':
                                    symbol='&#x2601';
                                    break;
                            }
                            $("#upcoming").append($(`<span class="upcoming"></span>`)
                                .append($(`<span class="symbol">${symbol}</span>`))
                                .append($(`<span class="forecast-data">${day.low+'&#176'}/${day.high+'&#176'}</span>`))
                                .append($(`<span class="forecast-data">${day.condition}</span>`)))
                        }
                    }
                }
            }
        }
    }
    function handleError(err){
        console.log(err);
    }
}