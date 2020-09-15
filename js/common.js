//real time clock

var dayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayIndex;

function updateDate(){
  var dateIST = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  var fixedDateIST = new Date(dateIST);
  dayIndex = fixedDateIST.getDay();
  document.getElementById("dateDayTime").innerHTML = dayStrings[dayIndex] + "\t" + fixedDateIST.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
}

updateDate();
setInterval(updateDate, 1000);

//timetable setting

var sundayTimetable = [
  ["-", "-", [["-", ""]]]
];

var mondayTimetable = [
  ["08:00", "General Elective lecture", [["[Cyber Security csed1]", "https://tiet.zoom.us/my/csed1"], ["[Graph Theory tietsom7]", "https://tiet.zoom.us/my/tietsom7"]]],
  ["11:20", "UCS507 Computer Architecture and Organization lab", [["csed13", "https://tiet.zoom.us/my/csed13"]]],
  ["13:50", "UCS701 Theory Of Computation lecture", [["csed2", "https://tiet.zoom.us/my/csed2"]]],
  ["14:40", "UCS503 Software Engineering lecture", [["csed14", "https://tiet.zoom.us/my/csed14"]]],
  ["15:30", "UCS507 Computer Architecture and Organization lecture", [["csed6", "https://tiet.zoom.us/my/csed6"]]]
];

var tuesdayTimetable = [
  ["08:00", "UCS701 Theory of Computation lecture", [["csed6", "https://tiet.zoom.us/my/csed6"]]],
  ["08:50", "Core Elective group-1 lecture", [["-", ""]]],
  ["13:00", "UCS503 Software Engineering lecture", [["csed10", "https://tiet.zoom.us/my/csed10"]]],
  ["13:50", "UCS415 Design and Analysis of Algorithms lecture", [["csed10", "https://tiet.zoom.us/my/csed10"]]]
];

var wednesdayTimetable = [
  ["08:00", "UCS415 Design and Analysis of Algorithms lecture", [["csed7", "https://tiet.zoom.us/my/csed7"]]],
  ["08:50", "Core Electives group-1 lecture", [["-", ""]]],
  ["09:40", "UCS521 Artificial Intelligence lecture", [["csed7", "https://tiet.zoom.us/my/csed7"]]],
  ["10:30", "UCS521 Artificial Intelligence practical", [["csed15", "https://tiet.zoom.us/my/csed15"]]],
  ["13:00", "General Elective lecture", [["[Cyber Security csed2]", "https://tiet.zoom.us/my/csed2"], ["[Graph Theory tietsom7]", "https://tiet.zoom.us/my/tietsom7"]]],
  ["16:20", "UCS503 Software Engineering practical", [["csed12", "https://tiet.zoom.us/my/csed12"]]]
];

var thursdayTimetable = [
  ["08:00", "UCS507 Computer Architecture and Organization lecture", [["csed6", "https://tiet.zoom.us/my/csed6"]]],
  ["08:50", "UCS701 Theory Of Computation lecture", [["csed5", "https://tiet.zoom.us/my/csed5"]]],
  ["09:40", "Core Electives group-2 lecture", [["[Data Science csed9]", "https://tiet.zoom.us/my/csed9"]]],
  ["10:30", "UCS701 Theory Of Computation tutorial", [["csed9", "https://tiet.zoom.us/my/csed9"]]],
  ["13:50", "UCS521 Artificial Intelligence lecture", [["csed13", "https://tiet.zoom.us/my/csed13"]]],
  ["14:40", "UCS415 Design and Analysis of Algorithms lecture", [["csed6", "https://tiet.zoom.us/my/csed6"]]],
  ["15:30", "UCS503 Software Engineering lecture", [["csed28", "https://tiet.zoom.us/my/csed28"]]]
];

var fridayTimetable = [
  ["09:40", "Core Electives group-2 lecture", [["[Data Science csed9]", "https://tiet.zoom.us/my/csed9"]]],
  ["10:30", "UCS507 Computer Architecture and Organization lecture", [["csed3", "https://tiet.zoom.us/my/csed3"]]],
  ["11:20", "UCS521 Artificial Intelligence lecture", [["csed6", "https://tiet.zoom.us/my/csed6"]]],
  ["16:20", "Core Electives group-1 lab", [["-", ""]]]
];

var saturdayTimetable = [
  ["08:00", "UCS523/UCS_EL1_67 practical", [["[Data Science csed3]", "https://tiet.zoom.us/my/csed3"]]],
  ["10:30", "UCS_EL1_5 practical", [["-", ""]]],
  ["12:10", "General Electives lecture", [["[Cyber Security csed2]", "https://tiet.zoom.us/my/csed2"], ["[Graph Theory tietsom7]", "https://tiet.zoom.us/my/tietsom7"]]],
  ["15:30", "UCS415 Design and Analysis of Algorithms practical", [["csed8", "https://tiet.zoom.us/my/csed8"]]]
];

var timetableEntries = [ sundayTimetable, mondayTimetable, tuesdayTimetable, wednesdayTimetable, thursdayTimetable, fridayTimetable, saturdayTimetable];

var timetableInDoc = document.getElementById("timetable")

timetableEntries[dayIndex].forEach(setRowEntries);

function setRowEntries( slotEntry ) {
  var newTimeSlot = timetableInDoc.insertRow(-1);
  var i;

  for( i = 0; i < 2; i ++){
    newTimeSlot.insertCell(i).innerHTML = slotEntry[i];
  }

  var linksColumn = newTimeSlot.insertCell(2);

  slotEntry[2].forEach(addHyperLinksToCol);

  function addHyperLinksToCol( link ){
    var anchor = document.createElement('a');
    var anchorLink = document.createTextNode(link[0]);
    anchor.appendChild(anchorLink);
    anchor.title = link[0];
    anchor.href = link[1];
    linksColumn.appendChild(anchor);
  }
}


//timetable slider

var timetableDayIndex = dayIndex;

document.getElementById("daySlider").innerHTML = dayStrings[timetableDayIndex];

document.getElementById("lSlider").onclick = function() { changeDay(-1); };

document.getElementById("rSlider").onclick = function() { changeDay(1); };

function changeDay( delta ){
  document.getElementById("timetable").innerHTML = "<thead><tr><th> Time </th><th> Subject </th><th> Link </th></tr></thead>";
  timetableDayIndex = (timetableDayIndex + delta + 7) % 7;
  document.getElementById("daySlider").innerHTML = dayStrings[timetableDayIndex];
  timetableEntries[timetableDayIndex].forEach(setRowEntries);
}
