var sundayTimeTable = [
  ["-", "-", "-"]
]

var mondayTimeTable = [
  ["08:00", "General Elective lecture", "link"],
  ["11:20", "UCS507 lecture", "link"],
  ["13:50", "UCS701 lecture", "link"],
  ["14:40", "UCS503 lecture", "link"],
  ["15:30", "UCS507 lecture", "link"]
]

var tuesdayTimeTable = [
  ["08:50", "Core Elective group-1 lecture", "links"]
]

var wednesdayTimeTable = [
  ["08:00", "UCS415 lecture", "link"],
  ["08:50", "Core Electives group-1 lecture", "links"],
  ["09:40", "UCS521 lecture", "link"],
  ["10:30", "UCS521 practical", "link"],
  ["13:00", "General Elective lecture", "link"],
  ["17:10", "UCS503 practical", "link"]
]

var thursdayTimeTable = [
  ["08:00", "UCS507 lecture", "link"],
  ["08:50", "UCS701 lecture", "link"],
  ["09:40", "Core Electives group-2 lecture", "links"],
  ["10:30", "UCS701 tutorial", "link"],
  ["13:50", "UCS521 lecture", "link"],
  ["14:40", "UCS415 lecture", "link"],
  ["15:30", "UCS503 lecture", "link"]
]

var fridayTimeTable = [
  ["09:40", "Core Electives group-2 lecture", "links"],
  ["10:30", "UCS507 lecture", "link"],
  ["11:20", "UCS521 lecture", "link"],
  ["16:20", "Core Electives group-2 lab", "links"]
]

var saturdayTimeTable = [
  ["08:00", "UCS523/UCS_EL1_67 practical", "links"],
  ["10:30", "UCS_EL1_5 practical", "links"],
  ["12:10", "General Electives lecture", "links"],
  ["15:30", "UCS415 practical", "links"]
]

var timeTableEntries = [ sundayTimeTable, mondayTimeTable, tuesdayTimeTable, wednesdayTimeTable, thursdayTimeTable, fridayTimeTable, saturdayTimeTable];

var today = new Date().getDay();

var timeTableInDoc = document.getElementById("timeTable")

timeTableEntries[today].forEach(setRowEntries);

function setRowEntries( slotEntry ) {
  var newTimeSlot = timeTableInDoc.insertRow(-1);
  var i;
  for( i = 0; i < 3; i ++){
    newTimeSlot.insertCell(i).innerHTML = slotEntry[i];
  }
}
