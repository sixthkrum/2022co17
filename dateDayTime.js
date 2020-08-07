var dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate(){
  var dateIST = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  var fixedDateIST = new Date(dateIST);
  var dayIndex = fixedDateIST.getDay();
  document.getElementById("dateDayTime").innerHTML = dayStrings[dayIndex] + "\t" + fixedDateIST.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
}

updateDate();
setInterval(updateDate, 1000);
