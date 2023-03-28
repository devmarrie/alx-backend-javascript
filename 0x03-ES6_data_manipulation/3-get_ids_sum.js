export default function getStudentIdsSum(stdList) {
  const sum = stdList.reduce((acc, value) => acc + value.id, 0);
  return sum;
}
