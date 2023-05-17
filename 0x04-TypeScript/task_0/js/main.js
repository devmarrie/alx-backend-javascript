var std1 = {
    firstName: 'Marrie',
    lastName: 'Akeyo',
    age: 22,
    location: 'Nairobi'
};
var std2 = {
    firstName: 'Kilo',
    lastName: 'Tufe',
    age: 28,
    location: 'Nigeria'
};
var studentsList = [std1, std2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var cellHead1 = rowHead.insertCell(0);
var cellHead2 = rowHead.insertCell(1);
cellHead1.innerHTML = "firstName";
cellHead2.innerHTML = "location";
table.append(thead);
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);
