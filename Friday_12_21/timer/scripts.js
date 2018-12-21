// console.log("sanity check");

function updateTimer(){
    // new Date() will create a new Date object with the current time
    // where current time = the moment the line ran
    var now = new Date();
    // getTime() can be run against a Date Object, and will convert to the #
    // of millseconds since 1-1-1970
    var nowAsTimestamp = now.getTime();
    // console.log(nowAsTimestamp);
    var timeRemaining = timeStamp - nowAsTimestamp;
    // console.log(timeRemaining)
    
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    
    // console.log(seconds);
    // console.log(minutes);

    // getElementsByClassName ALWAYS returns an Array, even if there is 0 or 1 thing
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    // querySelector will use css rules to find a match,
    // and only get the first one... NOT an array        
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds

    // == compares values
    // === compares values AND datatype
    // minutes = "0"
    // minutes == 0 TRUE
    // minutes === 0 NOT TRUE

    // var messageDiv = document.querySelector('.message');
    
    if(seconds === 0){
        // updatee the dom to say "Hooray, another minute closer!"
        document.querySelector('.message').innerHTML = "One minute closer to Christmas!";
    }else if(seconds >= 5){
        document.querySelector('.message').innerHTML = "";
    }

}

var endDate = new Date("December 25, 2018");
console.log(endDate)
var timeStamp = endDate.getTime();
console.log(timeStamp)
// setInterval will:
//  1. call the function in arg1
//  2. every arg2 milliseconds
updateTimer()
setInterval(updateTimer,1000)