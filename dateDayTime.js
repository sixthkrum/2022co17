var dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate(){
  var date = new Date();
  var dayIndex = date.getDay();
  document.getElementById("dateDayTime").innerHTML = dayStrings[dayIndex] + "\t" + date.toLocaleString();
}

updateDate();
setInterval(updateDate, 1000);
