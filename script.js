const time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
const messageText;
const noon = 12;
const evening = 18; // 6PM
const wakeupTime = 9; // 9AM
const lunchTime = 12; // 12PM
const partyTime = 17; // 5PM
const napTime = lunchTime + 2; // 2PM
const message = document.getElementById('timeEvent');
 
if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
}
else if (time == napTime)
{
    messageText = "IZ NAP TIME...";
}
else if (time == lunchTime)
{
    messageText = "IZ NOM NOM NOM TIME!!";
}
else if (time == wakeupTime)
{
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