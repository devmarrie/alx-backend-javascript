interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: unknown;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3);

// Extending the Teacher class 
interface Directors extends Teacher {
    numberOfReports: number;
}

//function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher:printTeacherFunction = (firstname, lastname) => `${firstname.charAt(0)}.${lastname}`


//class
interface classInterface {
    workOnHomework(): string;
    displayName(): string;
}
interface User {
    (firstName: string, lastName: string): classInterface;
}
class StudentClass implements classInterface {
    firstname: string;
    lastname: string;

    constructor(firstName: string, lastName: string) {
        this.firstname = firstName;
        this.lastname = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstname;
    }
}

const user = new StudentClass('Marrie', 'Akeyo');
console.log(user.displayName())
console.log(user.workOnHomework())