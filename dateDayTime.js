var dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate(){
  var date = new Date();
  var dayIndex = date.getDay();
  document.getElementById("dateDayTime").innerHTML = dayStrings[dayIndex] + "\t" + date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
}

updateDate();
setInterval(updateDate, 1000);
