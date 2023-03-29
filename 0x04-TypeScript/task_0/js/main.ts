interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const std1: Student = {
  firstName: 'Marrie',
  lastName: 'Akeyo',
  age: 22,
  location:'Nairobi'
};

const std2: Student = {
    firstName: 'Kilo',
    lastName: 'Tufe',
    age: 28,
    location:'Nigeria'
  };

const studentsList: Array<Student> = [std1, std2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody"); 
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cellHead1: HTMLTableCellElement = rowHead.insertCell(0);
const cellHead2: HTMLTableCellElement = rowHead.insertCell(1);

cellHead1.innerHTML = "firstName";
cellHead2.innerHTML = "location";
table.append(thead)

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;

});

table.append(tbody);
body.append(table);
