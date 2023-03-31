var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var printTeacher = function (firstname, lastname) { return "".concat(firstname.charAt(0), ".").concat(lastname); };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstname;
    };
    return StudentClass;
}());
var user = new StudentClass('Marrie', 'Akeyo');
console.log(user.displayName());
console.log(user.workOnHomework());
