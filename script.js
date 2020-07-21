 // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
// const messageText;
const noon = 12;
const evening = 18; // 6PM
const wakeupTime = 9; // 9AM
const lunchTime = 12; // 12PM
const partyTime = 17; // 5PM
const napTime = lunchTime + 2; // 2PM


const updateClock = () => {
    const time = new Date().getHours();
    const message = document.getElementById('timeEvent');
    const lolCat = document.getElementById('lolcat');

    const image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg" ;

    if (time == partyTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZ PARTEE TIME!!";
    }
    else if (time == napTime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME...";
    }
    else if (time == lunchTime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
    }
    else if (time == wakeupTime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        messageText = "IZ TIME TO GETTUP.";
    }
    else if (time < noon)
    {
        messageText = "Good morning, Mate!";
    }
    else if (time > evening)
    {
        messageText = "Good Evening, Mate!";
    }
    else
    {
        messageText = "Good afternoon, Mate!";
    }
    
    console.log(messageText);
    message.innerText = messageText;
    lolCat.src = image;

    showCurrentTime();

};

const showCurrentTime = () => 
{
    // display the string on the webpage
    let clock = document.getElementById('clock');
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // set hours
    if (hours >= noon) 
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours -12;
    }

    // set minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // set seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // display the time as a sting
    const clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;

};

updateClock();
const oneSecond = 1000;
setInterval(updateClock, oneSecond);

// party time button
const partyTimeButton = document.getElementById("partyTimeButton");
const isPartyTime = false;
 
const partyEvent = () => 
    {
    if (isPartyTime === false) 
   {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } 
   else 
   {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
 
partyTimeButton.addEventListener('click', partyEvent);

// ADDED BELOW `const partyTimeButton`
const napTimeSelector = document.getElementById("napTimeSelector");
const lunchTimeSelector = document.getElementById("lunchTimeSelector");
const wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
 
//ADDED BELOW `const partyEvent` function
const lunchEvent = () => 
{
    lunchTime = lunchTimeSelector.value;
};
 
const wakeUpEvent = () => 
{
    wakeupTime = wakeUpTimeSelector.value;
};
 
const napEvent = () => 
{
    napTime = napTimeSelector.value;
};
 
//ADDED BELOW `partyTimeButton` event listener
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);