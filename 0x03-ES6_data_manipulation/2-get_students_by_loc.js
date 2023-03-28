export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((stdList) => stdList.location === city);
}
