var date = new Date();
var dayIndex = date.getDay();
var dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("dateDayTime").innerHTML = dayStrings[dayIndex] + "\t" + date.toLocaleString();
