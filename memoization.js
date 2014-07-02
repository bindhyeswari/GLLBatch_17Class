
Date.getEpoch = function(){
    return (new Date()).valueOf();
};

document.addEventListener('DOMContentLoaded', function (){


    console.log(Date.getEpoch());

    // make an ajax call - display data on the console

    getCountryDetail('norway', function (data) {
        // do something with the server data
        console.log('This the event listener for ajax call ... ');
        console.log(data);
    });

    getCountryDetail('norway', function (data) {
        // do something with the server data
        console.log('This the event listener for ajax call ... ');
        console.log(data);
    });





});

getCountryDetail.cache = {};


function getCountryDetail(country_name, fn){

    // logging out the cache

    console.log(Date.getEpoch() + 'logging out cache');
    console.log(JSON.stringify(getCountryDetail.cache));


    // check if the country exists in the cache
    if (country_name in getCountryDetail.cache) {

        fn(getCountryDetail.cache[country_name]);

    } else {
        getCountryDetail.cache[country_name] = {};
        var url = 'http://restcountries.eu/rest/v1/name/' + country_name;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function (){
            if ( xhr.readyState === 4 && xhr.status === 200 ) {
                console.log(Date.getEpoch() + 'done');

                var data = JSON.parse(xhr.responseText);

                getCountryDetail.cache[country_name] = data[0];
                fn(getCountryDetail.cache[country_name]);
            }
        };
        xhr.send();
    }




}
