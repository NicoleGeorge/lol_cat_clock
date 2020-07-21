const time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
const messageText;
const noon = 12;
const evening = 18; // 6PM
const wakeupTime = 9; // 9AM
const lunchTime = 12; // 12PM
const partyTime = 17; // 5PM
const napTime = lunchTime + 2; // 2PM
const message = document.getElementById('timeEvent');
const lolCat = document.getElementById('lolcat');
const image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg" ;


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
 
message.innerText = messageText;
lolCat.src = image;


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

    const clockTime = hours = ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;

    showCurrentTime();
};
