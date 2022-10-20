var studentName = "Betty";
var studentMajor = "mkt";
var majorName;
var depOff;

if (studentMajor == "biol") {
    majorName = "Biology";
    depOff = "Science Bldg, Room 310";
}
else if (studentMajor == "csci") {
    majorName = "Computer Science";
    depOff = "Sheppard Hall, Room 314";
}
else if (studentMajor == "eng") {
    majorName = "English";
    depOff = "Kerr Hall, Room 201";
}
else if (studentMajor == "hist") {
    majorName = "History"
    depOff = "Kerr Hall, Room 114";
}
else if (studentMajor == "mkt") {
    majorName = "Marketing";
    depOff = "Westly Hall, Room 310";
}
else {
    majorName = "<unknown>";
    depOff = "<unknown>";
}

studentName = "Student: " + studentName;
majorName = "Major: " + majorName;
depOff = "Advising Location: " + depOff;

console.log(
    studentName +'\n'+
    majorName +'\n'+
    depOff
);