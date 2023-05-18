const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
          console.log(`Number of students in ${key}: ${studentCount}. List: ${value.join(',')}`);
        }
        resolve(data);
      }
    });
  });
}

module.exports = readDatabase;
