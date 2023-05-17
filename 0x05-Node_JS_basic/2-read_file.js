const fs = require('fs');

function countStudents(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf-8');
    const lines = data.split('\n');
    const header = lines[0].split(',');
    const rows = lines.length - 1;
    const fieldIndex = header.indexOf('field');
    const studentByField = {};

    console.log(`Number of students: ${rows}`);
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');

      if (values[fieldIndex] !== '') {
        const field = values[fieldIndex];
        if (!studentByField[field]) {
          studentByField[field] = [];
        }
        // push first name
        studentByField[field].push(values[0]);
      }
    }

    for (const [key, value] of Object.entries(studentByField)) {
      const studentCount = value.length;
      console.log(`Number of students in ${key}: ${studentCount}. List: ${value.join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
